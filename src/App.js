import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  render() {
    return (
      <div className='App'>
        <Todo />
        <TodoList todos={this.state.todos}/>
        <TodoForm addTodoFn={this.addTodo}/>
      </div>
    );
  }
  componentDidMount = () =>{
   const todos = localStorage.getItem('todos');
   if(todos) {
     const savedTodos = JSON.parse(todos);
    this.setState({ todos: savedTodos});
   } else{
    console.log('no todos')
   }
  }
  addTodo =  async (todo) => {
    await this.setState({ todos: [...this.state.todos, todo]})
    
    localStorage.setItem('todos',JSON.stringify(this.state.todos))
    
}
}

export default App;
