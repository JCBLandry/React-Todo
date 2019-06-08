import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'




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
        <h1>To-Do List</h1>
        <h2>Let's get it done, boys.</h2>
        <TodoList updateTodoFn={this.updateTodoFn} todos={this.state.todos}/>
       <TodoForm  addTodoFn={this.addTodo}/>
       <button className='deletebut' onClick={(e) => this.deleteDone(e)}>Clear Completed!</button>
        
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

updateTodoFn = async (todo) => {
  const newTodos = this.state.todos.map(_todo =>{
    if(todo === _todo)
    return {
      text: todo.text,
      id: Date.now(),
      completed: !todo.completed
    } 
    else
        return _todo
  } 
  );
 
  await this.setState({todos: newTodos});
  localStorage.setItem('todos', JSON.stringify(this.state.todos));
  
}

deleteDone = (e) => {
  e.preventDefault();
  const todos = this.state.todos.filter(todo => !todo.completed);
  this.setState({ todos });
};
  }


export default App;
