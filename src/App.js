import React from 'react';
import Container from '@material-ui/core/Container';
import { Grid, Button } from '@material-ui/core';

import Header from "./Header"
import Todo from "./Todo"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            i : 0
        }
    }
    addTask(i) {
        this.setState(state => {
            const list = state.tasks.push({"taskId": i, "taskName": "newTask "+ i});
            state.i = state.i + 1;
            return {
                list
            }
        })

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
                <Button onClick={() => this.addTask(this.state.i)}>Add Task</Button>
            </Container>


        )
    }
}

export default App;