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
    <div className="bg-gradient-to-r from-amber-100 to-red-200 flex justify-center items-center">
      <div className="App container bg-white px-3 pt-4 mt-10 w-3/4 md:max-w-2xl rounded-md ">
        <h1 className="flex justify-center text-center text-3xl">ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="add todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add cursor-pointer"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => {
            return (
              <ToDo
                key={item._id}
                text={item.text}
                updateMode={() => {
                  updateMode(item._id, item.text);
                }}
                deleteToDo={() => {
                  deleteToDo(item._id, setToDo);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
