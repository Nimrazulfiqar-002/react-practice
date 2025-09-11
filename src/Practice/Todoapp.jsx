// 1️⃣ Build a Dynamic To-Do List
// 📌 Task: Create a To-Do List where users can add, remove, and mark tasks as complete.
// ✅ Requirements:
// •	Use useState to manage tasks.
// •	Each task should have a title and completed status (true/false).
// •	Implement a delete button for removing tasks.
// •	Allow users to toggle the completed state.
// import React, { useState } from 'react'
// const Todoapp = () => {
//   const [todo,setTodo]=useState([]);
//   const[TodoList,setTodoList]=useState([])

//   const changeHandler=(e)=>{
//     console.log(e.target.value);
//     setTodo(e.target.value)
//   }
//   const deleteTodo=()=>{
//     setTodo(todo)
//   }
//   return (
//     <>
//         <h1>TODOAPP DYNAMICALLY</h1>
//         <div>
//            <input type="text"
//            value={todo}
//            onChange={changeHandler} 
//            />
//            <button>Add</button> 
//         </div>  
//         {/* {TodoList.map((n)=>{
         
//         })} */}
//          <div>
//         <input type='checkbox'/>
//          <h1>{todo}</h1>
//          <button>Delete</button>
//         </div>  
//     </>
//   )
// }

// export default Todoapp
import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask('');
  };

  const toggleTask = index => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const removeTask = index => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((item, i) => (
          <li key={i}>
              <input type="checkbox"    
              onClick={() => toggleTask(i)}
              />
            <h2 style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</h2>
            <button onClick={() => removeTask(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
