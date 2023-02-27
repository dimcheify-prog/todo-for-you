import React from 'react';
import {DefaultButton} from "../UI/Buttons/DefaultButton.styles";
import {DefaultInput} from "../UI/Inputs/DefaultInput.styles";
import {ITask} from "../../interfaces/taskInterface";
import {v4} from "uuid";
import {useNavigate} from "react-router-dom";
import {useInput} from "../../hooks/useInput"

interface ICreateFormProps {
    onCreateTask: (newTask: ITask) => void;
}


const MyCreateForm : React.FC<ICreateFormProps> = ({onCreateTask}) => {
    console.log('MyCreateForm render')
    const [taskTitle, resetTaskTitle] = useInput('');
    const navigate = useNavigate();

    const handlerSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const newTaskObj: ITask = {
            id: v4(),
            title: taskTitle.value,
            isDone: false,
        };
        onCreateTask(newTaskObj);
        navigate(-1);
    };

    const handlerReset = (e: React.SyntheticEvent) => {
        e.preventDefault();
        resetTaskTitle();
        navigate(-1);
    };

    return (
        <form onSubmit={handlerSubmit} onReset={handlerReset}>
            <label htmlFor="title">Название </label>
            <DefaultInput {...taskTitle} name="title" id="title" />
            <DefaultButton type="submit">Создать</DefaultButton>
            <DefaultButton type="reset">Отмена</DefaultButton>
        </form>
    );
};

export default MyCreateForm;