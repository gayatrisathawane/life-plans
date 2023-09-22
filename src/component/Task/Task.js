import './Task.css';
import bin from './bin.png';
import pencil from './pencil.png';
const Task = ({id,tittle,description,priority ,removeTaskList,setTaskEditable}) =>
{
    return(
        <div className='task-container'>
            
            <h2 className='tasktittle'>{tittle}</h2>
            <p className='taskdec'>{description}</p>
            <span className='takpriority'> 🎯 {priority}</span>
             <span ><img src={bin} className='task-remove'  alt="delete-icon" onClick={(id)=>
            {
                removeTaskList(id)

            }}/></span> 

            {/* <span className='task-remove' onClick={()=>
            {
                removeTaskList(id)
            }}>🗑</span> */}

            <span><img src={pencil} className='edit-icon' alt='edit-icon' 
            onClick={()=>
            {
                setTaskEditable(id)
               
            }}/></span>
        </div>
         
    )
}
export default Task;