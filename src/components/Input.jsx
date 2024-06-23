import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, updateTodoAction } from "../redux/action/todo.action";

export default function Input() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
 const editData = useSelector(state => state.editData);
// console.log(editData);

  const submit = (event) => {
    event.preventDefault();

    if(editData.index !== -1){
dispatch(updateTodoAction(editData.index, todo))
    }else{
        dispatch(addTodoAction(todo));
    }

    setTodo(""); // Clear the input field
  };

  useEffect(() => {
    setTodo(editData.data);
  }, [editData.index, editData.data]);
  
  return (
    <form className="row" onSubmit={submit}>
      <div className="col-10">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
      </div>

      <div className="col-2">
        <button type="submit"
         className="btn btn-primary mb-3"
         disabled={!todo}>
          {
            editData.index > -1 ?  "Update": "Add"
          }
        </button>
      </div>
    </form>
  );
}
