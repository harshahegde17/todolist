import React from 'react';
import Container from '@material-ui/core/Container';
import { Grid , Button} from '@material-ui/core';

import Header from "./Header"
import Todo from "./Todo"


class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            tasks:["task1", "task2"]
        }
    }
    addTask(){
        console.log(this.state.tasks);
        this.state.tasks.push("new task")
        console.log(this.state.tasks);
    }
    render() {
        return (

            <Container maxWidth="md">
                <div>
                    <Header></Header>
                </div>
                <Grid container justify="center" spacing={3}>
                    <Grid item md={4} sm={12} xs={12}>
                        <Todo tasks={this.state.tasks}></Todo>
                    </Grid>
                </Grid>
                <Button onClick={()=>this.addTask()}>Add Task</Button>
            </Container>


        )
    }
}

export default App;