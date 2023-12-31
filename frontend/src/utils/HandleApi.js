import axios from "axios";
// const baseURL = "http://localhost:10000";
const baseURL = "https://todo-app-2iv2.onrender.com";

const getAllToDo = (setToDo) => {
  axios
    .get(baseURL)
    .then(({ data }) => {
      console.log("data ----> ", data);
      setToDo(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

const addToDo = (text, setText, setToDo) => {
  axios.post(`${baseURL}/create`, { text }).then((data) => {
    console.log(data);
    setText("");
    getAllToDo(setToDo);
  });
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .post(`${baseURL}/update`, { _id: toDoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseURL}/delete`, { _id })
    .then((data) => {
      console.log("test");
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.log(err);
    });
};

// const deleteToDo = (_id, setToDo) => {
//   axios
//     .delete(`${baseURL}/delete`, { _id })
//     .then((data) => {
//       console.log(data);
//       getAllToDo(setToDo);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export { getAllToDo, addToDo, updateToDo, deleteToDo };
