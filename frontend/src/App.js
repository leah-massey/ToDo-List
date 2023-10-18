import { useState, useEffect } from "react";
import ToDo from "./compnents/ToDo";
import { addToDo, getAllToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  return (
    <>
      <div className="App container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="add todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="add" onClick={() => addToDo(text, setText, setToDo)}>
            Add
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => {
            return <ToDo key={item._id} text={item.text} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
