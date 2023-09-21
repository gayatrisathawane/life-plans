import './Home.css';
import './../../index.css';
import Task from '../../component/Task/Task';
import { useState } from 'react';

const Home = () =>
{

    const [tasklist,setTaskList]=useState([
        {
            id:1,
            tittle:"submit assignment",
            description:"kjdjka jhdjkh kajsdh",
            priority:"  Very high"
        }

       
    ])
      const randomId= Math.floor(Math.random() *1000);
    const addtoplan = () =>{
        const obj={
            id:randomId,
            tittle:tittle,
            description:description,
            priority:priority
        }
      
        setTaskList([...tasklist,obj])

        setTittle('')
        setDescription('')
        setPriority('')



    }

    const removeTaskList = (obj) =>
     {
        const index=tasklist.indexOf(obj);

        const tempArray=tasklist;
     tempArray.splice(index,1)
       
        setTaskList([...tempArray])
       
    }

    const[tittle,setTittle]=useState('')
    const[description,setDescription]=useState('')
    const[priority,setPriority]=useState('')
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

                                const{tittle,description,priority}=taskitem;

                                 return<Task tittle={tittle}
                                  description={description} 
                                  priority={priority} 
                                  key={index}
                                  
                                  removeTaskList={removeTaskList}/>
                               })
                               
                            } 
                      </div>

                </div>

                <div>
                    <h2 className='taskheading'>Add Task</h2>

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
                <button type='button' className='btntask'  onClick={addtoplan}

            >Add Life Plane ✔</button>


                        </form>
                    </div>
                </div>



            </div>


        </div>
    )
}
export default Home;