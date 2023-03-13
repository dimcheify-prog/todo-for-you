import React from 'react';
import {TaskPageStyles} from "./TaskPage.styles";
import TasksList from "../../components/TasksList/TasksList";
import {useFetch} from "../../hooks/useFetch";
import ErrorComponent from "../../components/Error/ErrorComponent";
import {Watch} from "react-loader-spinner";
import {PluseButton} from "../../components/UI/Buttons/PluseButton.styles";
import {Link} from "react-router-dom";

const TaskPage : React.FC = () => {
    const {data, error, loading} = useFetch('http://localhost:8000/tasks', 'get');

    // здесь мы обрабатываем запрос и можем сигнализировать о неудачном запросе
    if (loading) return <Watch />;
    if (error) return <ErrorComponent error={error}/>;

    //TODO: добавитб еще один слой абстракции в виде компонента Fetch
    return (
        <TaskPageStyles>
            <TasksList tasks={data}/>
            <Link to={'create'}>
                <PluseButton>+</PluseButton>
            </Link>
        </TaskPageStyles>
    )
};

export default TaskPage;