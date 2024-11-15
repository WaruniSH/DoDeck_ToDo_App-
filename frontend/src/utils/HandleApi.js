import axios from 'axios'

const baseurl = "https://localhost:5000"

const getAllToDo = (setToDO) => {
    axios
    .get(baseurl)
    .then(({data}) => {
        console.log('data ---> ', data);
        setToDO(data)
    })
}
const addToDo = (text, setText, setToDo) => {
    axios
    .post(`${baseurl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}


const updateToDo = (updateToDo, text, setToDo,setIsUpdating) => {
    axios
    .post(`${baseurl}/update`, {_id : toDoId, text})
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}
export {getAllToDo, addToDo, updateToDo}