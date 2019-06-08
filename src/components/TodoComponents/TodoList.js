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
                            <Todo updateTodoFn={this.updateTodoFn} key={_index}
                                todo = {_todo}>
                            </Todo>
                        )
                    })
                }

            </div>
        );
    }
    updateTodoFn = (todo) => {
        this.props.updateTodoFn(todo);
    }
}


export default TodoList;
