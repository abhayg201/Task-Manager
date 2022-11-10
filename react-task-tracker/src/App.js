import Header from "./components/Header";
import Tasks from './components/Tasks';

import {useState} from 'react'
import AddTask from "./components/AddTask";

function App() {

  const [tasks, setTasks] = useState([
  {
    id:'1',
    text: 'abhay',
    day: '12',
    reminder: 'false'
  },
  {
    id:'2',
    text: 'akbhay',
    day: '182',
    reminder: 'false'
  }]);

  //delete task
  const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id!==id ));
      // console.log('delete',id)
  }

  //toggle reminder
  const toggleReminder= (id) =>{
      setTasks(tasks.map((task)=>{
        return task.id===id ? {...task, reminder: !task.reminder} :task ;
      }))
  }

  return (
    <div className='container'>

      <Header/>
      <AddTask/>
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder} />: 'No Task to show'}
    </div>
  );
}

export default App
