import axios from "axios";
const baseURL = "http://localhost:3002";

// const getAllToDo = (setToDo) => {
//   axios
//     .get(baseURL)
//     .then({data}) => {
//       console.log('data ----> ', data)
//       setToDo(data)
//     };
// };
const getAllToDo = (setToDo) => {
  axios
    .get(baseURL)
    .then((response) => {
      const data = response.data;
      console.log("data ----> ", data);
      setToDo(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const addToDo = (text, setText, setToDo) => {
  axios.post(`${baseURL}/create`, { text }).then((data) => {
    console.log(data);
    setText("");
    getAllToDo(setToDo);
  });
};

export { getAllToDo, addToDo };
