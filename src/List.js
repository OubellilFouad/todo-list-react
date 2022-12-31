import { useState } from "react";
import AddBtn from "./AddBtn";
import TaskCon from "./TaskCon";
import Form from "./Form";
import "./delete.svg"

const List = ({type,project,setProject,element}) => {
    const [task,setTask] = useState([]);
    const [input, setInput] = useState("");
    const handleDelete = ({id}) => {
        setProject(project.filter((elem)=> elem.id !== id))
    }
    const showForm = (e) => {
        e.target.previousSibling.classList.add('show');
        e.target.classList.remove('show');
    }

    return (
        <div className="list">
            <p className='title'>{type} {type !== 'Tasks'? <svg onClick={() => handleDelete(element)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
:""}</p>
            
            <hr/>
            <TaskCon
                task = {task}
                setTask = {setTask}
            />
            <Form
                input = {input}
                setInput = {setInput}
                task = {task}
                setTask = {setTask}
            />
            <AddBtn passFunc={(e) => showForm(e)}/>
        </div>
    )
}
export default List;