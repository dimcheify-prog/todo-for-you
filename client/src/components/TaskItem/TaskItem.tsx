import React, {useState, useEffect, useCallback} from 'react';
import {TaskItemStyles, TaskTitle} from "./TaskItem.styles";
import {ITask} from "../../interfaces/taskInterface";
import Checkmark from "../UI/Checkmark/Checkmark";
import axios from 'axios';

interface ITaskItemProps {
    task: ITask;
}

const TaskItem : React.FC<ITaskItemProps> = ({task}) => {
    console.log('TaskItem render')
    const [isComplete, setIsComplete] = useState<boolean>(task.isDone);

    const onChangeStatus = (result: boolean) => {
        setIsComplete(result);
    };

    const changeTaskStatusRequest = useCallback(async () => {
        const response = await axios.patch(`http://localhost:8000/tasks/${task.id}`, {isDone: isComplete});
    }, [isComplete, task.id])

    useEffect(() => {
        changeTaskStatusRequest();
    }, [isComplete, changeTaskStatusRequest]);

    return (
        <TaskItemStyles>
            <Checkmark  status={task.isDone} changeStatus={onChangeStatus}/>
            <TaskTitle to={`${task.id}`}>{task.title}</TaskTitle>
        </TaskItemStyles>
    );
};

export default TaskItem;