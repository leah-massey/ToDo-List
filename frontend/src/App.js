import { useState, useEffect } from "react";
import ToDo from "./compnents/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="h-screen bg-gradient-to-r from-cyan-100 to-blue-100 flex justify-center items-center">
      <div className=" bg-white px-8 pt-4 mt-10 w-3/4 md:max-w-2xl rounded-md font-mono">
        <h1 className="mt-5 flex justify-center text-center text-3xl  tracking-widest">
          ToDo List
        </h1>

        <div className="container px-1 md:px-5 pt-8 ">
          <div className="add-todo flex w-full ">
            <input
              className="w-11/12"
              type="text"
              placeholder="add todo"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className=" cursor-pointer bg-red-200 mx-5 md:mx-6 px-6 py-3 rounded-md"
              onClick={
                isUpdating
                  ? () =>
                      updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                  : () => addToDo(text, setText, setToDo)
              }
            >
              {isUpdating ? "update" : "Add"}
            </button>
          </div>

          <div className="py-5">
            {toDo.map((item) => {
              return (
                <ToDo
                  key={item._id}
                  text={item.text}
                  updateMode={() => {
                    updateMode(item._id, item.text);
                  }}
                  deleteToDo={() => {
                    console.log("item deleted");
                    deleteToDo(item._id, setToDo);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
