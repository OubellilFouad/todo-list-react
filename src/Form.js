import { v4 as uuidv4 } from "uuid";

const Form = ({input,setInput,task,setTask}) => {
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setTask([...task,{id: uuidv4(),name: input,completed: false}]);
        setInput('');
        e.target.nextSibling.classList.add('show');
        e.target.classList.remove('show');
        document.querySelector('.form input').value = "";
        e.target.children[0].value = '';
    }
    return (
        <form className="form" onSubmit={handleSubmit} id="form">
            <input type='text' onChange={handleInputChange} placeholder='Name' id="name"/>
            <button type="submit">Add</button>
        </form>
    )
}

export default Form;