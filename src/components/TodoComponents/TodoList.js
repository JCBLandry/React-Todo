/* <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array. */

import React from 'react';
import Todo from '../TodoComponents/Todo';


class TodoList extends React.Component{

    render(){
        const { todos } = this.props;
        return(
            <div className='todoListContainer'>
                
                {
                    todos.map((_todo, _index) =>{
                        return(
                            <Todo updateTodoFn={this.updateTodo} key={_index}
                                todo = {_todo}>
                            </Todo>
                        )
                    })
                }

            </div>
        );
    }
    updateTodo = (todo) => {
        this.props.updateTodoFn(todo);
    }
}


export default TodoList;
