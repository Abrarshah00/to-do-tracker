import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Addtask from "./components/AddTask";
import { useState } from "react";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm ",
      reminder: false,
    },
    {
      id: 2,
      text: "Clothes Shopping",
      day: "Feb 18th at 2:30pm ",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm ",
      reminder: false,
    },
  ]);
  //Add Task
  const addtask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log(task);
  };

  //Delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete", id);
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log("Toggle", id);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <Addtask onAdd={addtask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task To SHow"
      )}
    </div>
  );
}

export default App;
