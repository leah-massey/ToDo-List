import { useState, useEffect } from "react";
import ToDo from "./compnents/ToDo";
import { getAllToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  return (
    <>
      <div className="App container">
        <h1>ToDo App</h1>
        <div className="top">
          <input type="text" placeholder="add todo"></input>
          <div className="add">Add</div>
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
