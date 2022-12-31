import { v4 as uuidv4 } from "uuid";

const ProjectForm = ({project,setProject,title,setTitle}) => {
    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setProject([...project,{title: title,id: uuidv4()}]);
        setTitle('');
        e.target.classList.remove('show');
        document.getElementById('projectName').value = '';
    }
    return (
        <form className="form" id="projectForm" onSubmit={handleSubmit}>
            <input type='text' id="projectName" onChange={handleChange} placeholder="Project Name"/>
            <button>Add</button>
        </form>
    )
}
export default ProjectForm;