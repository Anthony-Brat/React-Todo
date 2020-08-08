import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todos = [
  {
    task: "Research Intermitten Fasting",
    id: 3,
    completed: false,
  },
  {
    task: "Spray Yard with Tick Killer",
    id: 1,
    completed: false,
  },
  {
    task: "Give Dogs Bath",
    id: 2,
    completed: false,
  },
  {
    task: "Watch Heavy Bag Workout",
    id: 4,
    completed: false,
  },
  {
    task: "Wash Car",
    id: 5,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
        todos
    }
  }
  toggleItem = todoId => {
    console.log(todoId);
    
    this.setState({
   
      groceries: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            // return the item with purchased field toggled
            ...todo,
            purchased: !todo.purchased
          };
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm />
        </div>
        <TodoList todos= {this.state.todos}/>
      </div>
    );
  }
}

export default App;

    