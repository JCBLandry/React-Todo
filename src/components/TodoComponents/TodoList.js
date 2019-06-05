/* <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array. */

import React from 'react';

class TodoList extends React.Component{

    render(){
        const {todos} = this.props;
        return(
            <div className='todoListContainer'>
                {
                    todos.map((todo, index) =>{
                        return(
                            <div>
                                {todo}
                            </div>
                        )
                    })
                }

            </div>
        );
    };
}


export default TodoList;
