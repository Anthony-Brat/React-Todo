import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state ={
            todo:""
        };
    }
    render(){
        return(
            <div>
                <form>
                    <input
                    type = "text"
                    name = "todo"
                    value = {this.state.todo}/>
                    <button>Add Task</button>
                </form>

            </div>
        )
    }
}

    

    export default TodoForm;
  