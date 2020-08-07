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
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
