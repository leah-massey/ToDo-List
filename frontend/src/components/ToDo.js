import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className="todo bg-blue-100  ">
      <div className="text w-3/5 left-3 ">{text}</div>
      <div className="icons right-3">
        <BiEdit className="icon " onClick={updateMode} />
        <AiFillDelete className="icon " onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
