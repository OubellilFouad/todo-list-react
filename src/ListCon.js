import List from './List';
import ProjectForm from "./ProjectForm";
import { useState } from 'react';

const Container = () => {
    const [project,setProject] = useState([]);
    const [title, setTitle] = useState('');

    return (
        <div className='container'>
            <List type='Tasks'/>
            {project.map((e)=>{
                return(
                    <List element = {e} project = {project} setProject = {setProject} type={e.title}/>
                )
            })}
            <>
                <ProjectForm
                    project = {project}
                    setProject = {setProject}
                    title = {title}
                    setTitle = {setTitle}
                />
            </>
        </div>
    )
}

export default Container;