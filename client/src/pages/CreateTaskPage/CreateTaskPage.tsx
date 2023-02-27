import React from 'react';
import {CreateTaskPageStyles} from "./CreateTaskPage.styles";
import MyCreateForm from "../../components/Forms/MyCreateForm";
import GoBackButton from "../../components/UI/Buttons/GoBackButton";
import {ITask} from "../../interfaces/taskInterface";
import axios from "axios";

const CreateTaskPage = () => {
    console.log('CreateTaskPage render')
    const createTask = (newTask: ITask) => {
        axios({url: 'http://localhost:8000/tasks', method: 'post', data: newTask});
    };

    return (
        <CreateTaskPageStyles>
            <GoBackButton />
            <MyCreateForm onCreateTask={createTask} />
        </CreateTaskPageStyles>
    );
};

export default CreateTaskPage;