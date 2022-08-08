import React, { Component } from 'react'

export default class UI extends Component {
     constructor(){
         super();
        this.state = {
            ListOfTasks : [{Name : "To make a ToDo App", Id : 0}],
            currentTask: "",
            IDtoUse : []
        }
        
     }

    WriteNewTask = (e) =>{
        this.setState({
            currentTask : e.target.value

        })
    }

    removeItem = (key) => {
        this.setState({
            ListOfTasks : this.state.ListOfTasks.filter((taskObj) => {
                return taskObj.Id!=key;
            }),
            IDtoUse : [...this.state.IDtoUse,key]

        })
    }

    AddTask = () =>{
        let temp = this.state.IDtoUse.length==0?this.state.ListOfTasks.length:this.state.IDtoUse.pop()
        console.log(temp);
        this.setState({
            ListOfTasks: this.state.currentTask.length===0?[...this.state.ListOfTasks]:[...this.state.ListOfTasks,{
                Name : this.state.currentTask,
                Id : temp
            }],
            currentTask : "",
            //IDtoUse : this.state.IDtoUse.length==0?this.state.IDtoUse:this.state.IDtoUse.slice(1)

        })
    }
  render() {
    return (
      <div>
        <div>
            <input type='text' value={this.state.currentTask} onChange={this.WriteNewTask}></input>
            <button onClick={this.AddTask}>Submit</button>
        </div>
        <p>Tasks To Complete</p>
        <p> </p>
        <div>
            
            {
                this.state.ListOfTasks.map((taskObj) =>(
                    <div>
                        {taskObj.Name}
                        <button onClick={() => this.removeItem(taskObj.Id)}>Completed</button>
                    </div>
                ))
            }
        </div>
      </div>
    )
  }
}


