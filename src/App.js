import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appointment',
      day: '1st January at 2.30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: '31st March at 5.30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Online Interview',
      day: '5th May at 4.30',
      reminder: true,
    },
    {
      id: 4,
      text: 'Playing Soccer',
      day: '3rd August at 5.30',
      reminder: false,
    }
  ])

  //Delete Task
  const deletTask = (id) => {
    console.log("Delete", id);
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const onToggle = (id) =>{
    console.log("Toggle", id);
    setTasks(tasks.map((task) => task.id == id ? {...task, reminder:!task.reminder} : task));
  }


  return (
    <div className='container'>
      <Header title="Task Tracker" />
      {tasks.length > 0 ? (<Tasks className='task' tasks={tasks}
        onDelete={deletTask} onToggle={onToggle}/>) :
        ('No Task To Show')}
    </div>
  );
}

export default App;
