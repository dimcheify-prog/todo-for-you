import React, {useState, useCallback} from 'react';
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

    const onChangeStatus = useCallback(() => {
        setIsComplete(prevState => !prevState);
        axios({url: `http://localhost:8000/tasks/${task.id}`, method: "patch", data: {isDone: isComplete}});
    }, [task.id]);

    return (
        <TaskItemStyles>
            <Checkmark  status={isComplete} changeStatus={onChangeStatus}/>
            <TaskTitle to={`${task.id}`}>{task.title}</TaskTitle>
        </TaskItemStyles>
    );
};

export default TaskItem;