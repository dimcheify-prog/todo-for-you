import React from 'react';
import {TasksListStyles, MainTitle} from "./TasksList.styles";
import {ITask} from "../../interfaces/taskInterface";
import TaskItem from "../TaskItem/TaskItem";

interface ITasksListProps {
    tasks: ITask[];
}

const TasksList : React.FC<ITasksListProps> = ({tasks}) => {
    // здесь мы можем обработать ситуацию когда запрос успешен но список пуст
    return (
        <TasksListStyles>
            <MainTitle>Туду фор ю</MainTitle>
            {tasks.length > 0 ?
                tasks.map(task => {
                    return <TaskItem key={task.id} task={task} />;
                }) :
                <h1>Здесь пока нет задач...</h1>
            }
        </TasksListStyles>
    );
};

export default TasksList;