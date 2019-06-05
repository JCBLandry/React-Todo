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
        <TodoList todos={this.state.todos}/>
        <TodoForm updateTodoFn={this.updateTodo} addTodoFn={this.addTodo}/>
      </div>
    );
  }
  componentDidMount = () =>{
   const todos = localStorage.getItem('todos');
   if(todos) {
     const savedTodos = JSON.parse(todos);
    this.setState({ todos: savedTodos});
   } else{
    console.log('no todos');
   }
  }
  addTodo =  async (todo) => {
    await this.setState({ todos: [...this.state.todos, {text: todo, completed: false}] });
    
    localStorage.setItem('todos',JSON.stringify(this.state.todos));
    
}

updateTodo = async (todo) => {
  const newTodos = this.state.todos.map(_todo =>{
    if(todo === _todo)
    return {
      text: todo.text,
      completed: !todo.completed
    } 
    else
        return _todo
  } );
  await this.setState({todos: newTodos});
  localStorage.setItem('todos', JSON.stringify(this.state.todos));
}
}
export default App;
