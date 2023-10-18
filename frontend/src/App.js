import ToDo from "./compnents/ToDo";

function App() {
  return (
    <>
      <div className="App container">
        <h1>ToDo App</h1>
        <div className="top">
          <input type="text" placeholder="add todo"></input>
          <div className="add">Add</div>
        </div>
        <div className="list">
          <ToDo text="hi" />
          <ToDo text="hi" />
          <ToDo text="hi" />
          <ToDo text="hi" />
        </div>
      </div>
    </>
  );
}

export default App;
