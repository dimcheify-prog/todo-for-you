import React, {useState} from 'react';
import {DefaultInput} from "../UI/Inputs/DefaultInput.styles";
import {DefaultButton} from "../UI/Buttons/DefaultButton.styles";
import {ITask} from "../../interfaces/taskInterface";
import axios from "axios";
import {useInput} from "../../hooks/useInput";

interface IChangeFormProps {
    task: ITask;
    onChange: React.SetStateAction<any>;
    formActive: React.SetStateAction<any>;
}

const MyChangeForm : React.FC<IChangeFormProps> = ({task, formActive, onChange}) => {
    console.log('MyChangeForm render')
    const [taskTitle, resetTaskTitle] = useInput(task.title);


    const changeTaskRequest = async () => {
        await axios.patch(`http://localhost:8000/tasks/${task.id}`, {title: taskTitle.value});
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        onChange({...task, title: taskTitle.value})
        changeTaskRequest();
        formActive(false);
    };

    const handleReset = (e: React.SyntheticEvent) => {
        e.preventDefault();
        resetTaskTitle();
        formActive(false);
    };

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <label htmlFor="title">Название </label>
            <DefaultInput name="title" id="title" value={taskTitle.value} onChange={taskTitle.onChange} />
            <DefaultButton type="submit">Сохранить</DefaultButton>
            <DefaultButton type="reset">Отмена</DefaultButton>
        </form>
    )
};

export default MyChangeForm;