/* <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
Once a todo is submitted, the Todo List should re-render and show the added todo. */

import React from 'react';

class TodoForm extends React.Component{
constructor(){
    super();
    this.state = {
        todo: ''
    };
}

    render(){
        return(
            <div className='todoContainer'>
                <form onSubmit={(e) => this.submitTodo(e)} >
                  <input onChange={(e) => this.updateInput(e)} type='text'></input>
                  <button type='submit'>Add the Todo!</button>
                </form>

            </div>
        );
    }
    updateInput = (e) =>{
        this.setState({todo: e.target.value});
    }
    submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodoFn(this.state.todo);
console.log('submit', this.state);
    }
}


export default TodoForm;