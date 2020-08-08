import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state ={
            todo:""
        };
    }
    handleChanges = event =>{
        this.setState({ todo: event.target.value})
    }
    submitTodo = event => {
        event.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({ todo: ""});
    };
    render(){
        return(
            <div>
                <form onSubmit={this.submitTodo}>
                    <input
                    type = "text"
                    name = "todo"
                    value={this.state.todo}
                    onChange={this.handleChanges}
                    />
                    <button>Add Task</button>
                </form>

            </div>
        )
    }
}

    

    export default TodoForm;
  