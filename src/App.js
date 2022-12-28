import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react"
import AddTask from "./components/AddTask";

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
  ])

  useEffect (() => {
    const getTask = async () =>{
      const taskFromServer = await fetchTask();
      
      setTasks(taskFromServer);
    
    } 
    getTask();
  },[])

  //Fetch Task

  const fetchTask = async () =>{
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    console.log("JsonData:", data);
   return data;
 }

  //Delete Task
  const deletTask = async (id) => {
    console.log("Delete", id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    });

    //Delete from UI
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const onToggle = (id) =>{
    console.log("Toggle", id);
    setTasks(tasks.map((task) => task.id == id ? {...task, reminder:!task.reminder} : task));
  }

  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    const data =  await res.json();

    // console.log("helllo");
    // const id = Math.floor(Math.random()*1000) + 1;

    // const newTask = {id, ...task};
    setTasks([...tasks, data]);

  }

  return (
    <div className='container'>
      <Header title="Task Tracker" onAdd = {()=>setShowAddTask(!showAddTask)} 
      showAdd = {showAddTask}/>
      {showAddTask &&  <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks className='task' tasks={tasks}
        onDelete={deletTask} onToggle={onToggle}/>) :
        ('No Task To Show')}
    </div>
  );
}

export default App;
