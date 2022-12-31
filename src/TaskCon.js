
const TaskCon = ({task,setTask}) => {
    const handleCompleted = ({id}) => {
        setTask(task.filter((item) => item.id !== id));
    }
    return (
        <div className="taskCon">
            {task.map((e)=>{
                console.log(e.name);
                return (
                    <div className="task" key={e.key}>
                        <span>
                            {e.name}
                        </span>
                        <input checked title = 'click to delete completed tasks' onClick={() => handleCompleted(e)} type='checkbox'/>
                    </div>
                )
            })}
        </div>
    )
}

export default TaskCon;