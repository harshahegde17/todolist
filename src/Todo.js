import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, ListItem, List } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        textAlign: "center"
    },
}));

export default function Todo(props) {
    const classes = useStyles();
    const tasks = props.tasks
    const listTasks = tasks.map(task =>
        <ListItem key={task.taskId}>{task.taskName}</ListItem>
    );


    return (
        <Card>
            <Typography className={classes.title}> Tasks</Typography>
            <List>{listTasks}</List>
        </Card>
    )

}