import React, {useState, useCallback, useEffect} from 'react';
import {TaskItemStyles, TaskTitle} from "./TaskItem.styles";
import {ITask} from "../../interfaces/taskInterface";
import Checkmark from "../UI/Checkmark/Checkmark";
import axios from 'axios';

interface ITaskItemProps {
    task: ITask;
}

const TaskItem : React.FC<ITaskItemProps> = ({task}) => {
    const [isComplete, setIsComplete] = useState<boolean>(task.isDone);
    console.log(isComplete)

    const onChangeStatus = useCallback( () => {
        setIsComplete(prevState => !prevState);
    }, [task.id]);

    const changeStatusRequest = useCallback(async () => {
        await axios({url: `http://localhost:8000/tasks/${task.id}`, method: "patch", data: {isDone: isComplete}});
    }, [isComplete]);

    useEffect(() => {
        changeStatusRequest();
    }, [isComplete])

    return (
        <TaskItemStyles>
            <Checkmark  status={isComplete} changeStatus={onChangeStatus} />
            <TaskTitle to={`${task.id}`}>{task.title}</TaskTitle>
        </TaskItemStyles>
    );
};

export default TaskItem;