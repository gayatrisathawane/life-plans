import './Home.css';
import './../../index.css';
import Task from '../../component/Task/Task';
import showToast from 'crunchy-toast';
import { useEffect, useState } from 'react';

const Home = () =>
{
    const[id,setId]=useState(0)
    const[tittle,setTittle]=useState('')
    const[description,setDescription]=useState('')
    const[priority,setPriority]=useState('')
    const[isEdit,setEdit]=useState(false)
  
    const [tasklist,setTaskList]=useState([
        {
            id:1,
            tittle:"submit assignment",
            description:"kjdjka jhdjkh kajsdh",
            priority:"  Very high"
        }

       
    ])
    let randomId= Math.floor(Math.random() *1000);
      

    const addtoplan = () =>{
        const obj={
            id:randomId,
            tittle:tittle,
            description:description,
            priority:priority
        }
      

        const newarraylist=[...tasklist,obj]
        setTaskList(newarraylist)

        setTittle('')
        setDescription('')
        setPriority('')

        savetolocalStorage(newarraylist);
         showToast('Task added  successfully', 'success', 3000);


    }

    const removeTaskList = (id) =>
     {
       let index;
       tasklist.forEach((task,i)=>{
        if(task.id === id){
            index=i
        }
       })
       
        const tempArray=tasklist;
        tempArray.splice(index,1)

        console.log(id)
       
        setTaskList([...tempArray])

        savetolocalStorage(tempArray);

        showToast('Deleted task successfully', 'alert', 3000); 
    }




   
    

    const savetolocalStorage = (task) =>
    {
        localStorage.setItem('lifeplanner',JSON.stringify(task))
    }

    
      



const setTaskEditable = (id) =>{
    setEdit(true)
    setId(id);
    let currentEditTask ;
    tasklist.forEach((task)=>{
    if(task.id === id){
        currentEditTask=task;
       
    }
    })

setTittle(currentEditTask.tittle)
setDescription(currentEditTask.description)
setPriority(currentEditTask.priority)

   

   
}
const updateTask =()=>
{
    let indexToupdate;
    tasklist.forEach((task,i)=>{
        if(task.id === id)
        {
            indexToupdate=i;
        }
    })
    const tempArray=tasklist;
    tempArray[indexToupdate] = {
        id:id,
        tittle:tittle,
        description:description,
        priority:priority
    }
    setTaskList([...tempArray])

    savetolocalStorage(tempArray)
       setId(0);
       setDescription('');
       setPriority('');
       setTittle('');
       setEdit(false)

    }
    




    useEffect(()=>
    {
        const list = JSON.parse(localStorage.getItem('lifeplanner'));
       
        if(list && list.length>0)
        {
            setTaskList(list)
        }
    } ,[])

    
    
    return (
        <div className='container'>
            <div className='tittle-project'>
            <h1 >LIFE PLANES 📝 </h1>
            </div>
            <div className='flex-box-container'>
                <div >
                    <h2 className='taskheading'>Task List</h2>
                      <div className='task-list-container'>
                            {
                               tasklist.map((taskitem,index)=>{

                                const{id,tittle,description,priority}=taskitem;

                                 return<Task 
                                 id={id}
                                 tittle={tittle}
                                  description={description} 
                                  priority={priority} 
                                  key={index}
                                  removeTaskList={removeTaskList}
                                  setTaskEditable={ setTaskEditable}
                                  />
                               })
                               
                            } 
                      </div>

                </div>

                <div>
                    <h2 className='taskheading'>{isEdit?`Update Task `:'Add Task'}</h2>

                    <div>
                       
                        <form>
                <input type='text'  className='inputf' placeholder='Enter a tittle'  value={tittle} onChange={(e)=>{
                    setTittle(e.target.value)
                }}/><br/>
                <input type='text'  className='inputf' placeholder='Enter a description' value={description} onChange={(e)=>{
                    setDescription(e.target.value)
                }}/> <br/>

                <input type='text'  className='inputf' placeholder='Enter a priority' value={priority}
                 onChange={(e)=>{
                    setPriority(e.target.value)
                }}/><br/>



                <div>
                    {isEdit? <button type='button' className='btntask'  onClick={updateTask}
                   >Update Task 🖊</button>:<button type='button' 
                   className='btntask'  onClick={addtoplan}
                   >Add Life Plane ✔</button>}
                </div>
                


                        </form>
                        
                    </div>
                </div>



            </div>


        </div>
    )
}
export default Home;