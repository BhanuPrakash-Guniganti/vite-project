import React, { useState } from "react";
import "./App.css";
import InputContainer from "./assets/Containers/InputContainer";
import TodoContainer from "./assets/Containers/TodoContainer";
function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputValue(e.target.value);
  }

  function addTodo() {
    if (inputValue !== '') {
      setTodos((prevTodos) => [...prevTodos, inputValue]);
      setInputValue('');
    }
  }

  function delTodo(index) {
  setTodos((prevTodos) => prevTodos.filter((_, prevTodosIndex) => prevTodosIndex !== index));
}

/*  function delTodo(index) {
  setTodos((prevTodos) => prevTodos.filter((prevTodos , prevTodosIndex) => {
    return prevTodosIndex != todoIndex
  })
  )
}


  */
/* function deleteTodo(index) {
  setTodos((prevTodos) => prevTodos.filter((_, prevTodosIndex) => prevTodosIndex !== index));
}
  */

/*  function delTodo(index) {
    setTodos((prevTodos) => prevTodos.filter((prevTodos , prevTodosIndex) => {
      return prevTodosIndex != todoIndex
    })
  )
  } 
*/
/* console.log(todos); */

  return (
    <main>
      <h1>ToDo List:</h1>
      <InputContainer inputValue={inputValue} writeTodo={writeTodo} addTodo={addTodo} />
      <TodoContainer todos={todos} delTodo={delTodo} />
    </main>
  );
}
export default App;


/*import "./App.css";
import InputContainer from "./assets/Containers/InputContainer";
import TodoContainer from "./assets/Containers/TodoContainer";
function App() {
  const [inputValue, setInputValue] =useState('');
  const [todos, setTodos] = useState('');
  function writeTodo(e){
  setInputValue(e.target.value);
  }
  function addTodo() {
    if (inputValue!='')
      set Todos([inputValue]);
    setTodos((prevTools) =>[...prevTools , inputValue])
    setInputValue('');
  
  }

  console.log(todos);
  return (

    <main>
      <h1>ToDo List:</h1>
      <InputContainer inputValue={inputValue} writeTodo={writeTodo} addTodo={addTodo} />
      <TodoContainer todos={todos}/>




    </main>

  )
}

export default App
*/