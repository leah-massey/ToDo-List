import Footer from "./components/Footer";
import ToDoBox from "./components/ToDoBox";

function App() {
  return (
    <div className="h-screen bg-gradient-to-tr from-cyan-100 via-blue-100 to-cyan-100 flex flex-col justify-center items-center">
      <ToDoBox />
      <Footer />
    </div>
  );
}

export default App;
