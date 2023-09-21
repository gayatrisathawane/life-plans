import './Task.css';
import bin from './bin.png';
const Task = ({id,tittle,description,priority ,removeTaskList,obj}) =>
{
    return(
        <div className='task-container'>
            <h1 className='tasktittle'>{tittle}</h1>
            <p className='taskdec'>{description}</p>
            <span className='takpriority'>{priority}</span>
            <span ><img src={bin} className='task-remove'  onClick={(obj)=>
            {
                removeTaskList(obj)

            }}/></span>
        </div>
         
    )
}
export default Task;