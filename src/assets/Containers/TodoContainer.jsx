/*
import React from 'react'
import Todo from '../Components/Todo';

function TodoContainer({ todos }) {
    return (

        <div className="container">
            {todos.map((todo,index)=>(
                <Todo key={index} todo={todo} />
            ))}

            </div>
    );
}
export default TodoContainer;

*/

import React from 'react';
import Todo from "./Todo"

function TodoContainer({ todos , delTodo = {delTodo}}) {
    return (
        <div className="container">
            {todos.map((todo, index) => (
                <Todo key={index}  todo={todo} index={index} delTodo={delTodo} />
            ))}
        </div>
    );
}

export default TodoContainer;