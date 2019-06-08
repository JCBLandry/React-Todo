/* <Todo /> is a component that takes in the todo data and displays the task to the screen. */

import React from 'react';
import './Todo.css'

class Todo extends React.Component{

    render() {
        const {todo} = this.props;

        return(
            <div className={'todoItem' + (todo.completed ? ' complete' : '')} onClick={this.toggleTodoFn}>{todo.text}</div>
        );
    }
    toggleTodoFn = () =>{
        this.props.updateTodoFn(this.props.todo);
    }
}


export default Todo;
