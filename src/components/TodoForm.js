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
                    <button>Add Task</button>
                </form>

            </div>
        )
    }
}

    

    export default TodoForm;
  