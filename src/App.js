
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';
import { useState } from 'react';

function App() {
  // const [todos, setTodos] = useState([
  //   { text: "Save the World", id: 1, isDone:false },
  //   { text: "Walk the Dog", id: 2, isDone:false },
  // ]);

  return (
    <div className='App'>
      <h1> TO DO APP !! </h1>
      <AddTodo  />
      <TodoList
      />
    </div>
  );
}

export default App;
