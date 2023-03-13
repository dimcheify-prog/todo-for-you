import React, {SyntheticEvent, useState} from 'react';
import {SingleTaskStyles, TaskTitle, ButtonBox, StatusSpan} from "./SingleTask.styles";
import {ITask} from "../../interfaces/taskInterface";
import {DefaultButton} from "../UI/Buttons/DefaultButton.styles";
import MyChangeForm from "../Forms/MyChangeForm";
import MyModal from "../MyModal/MyModal";
import {createPortal} from "react-dom";

interface ISingleTaskProps {
    data: ITask;
    onRemove: (e: SyntheticEvent) => void;
}

const SingleTask : React.FC<ISingleTaskProps> = ({data, onRemove}) => {
    const [task, setTask] = useState<ITask>(data);
    const [formActive, setFormActive] = useState<boolean>();
    const [modalActive, setModalActive] = useState<boolean>();

    const toggleForm = (e:React.SyntheticEvent) => {
        e.preventDefault();
        setFormActive(true);
    };

    const closeModal = () => {
        setModalActive(false);
    };

    return (
        <SingleTaskStyles>
            {formActive ? <MyChangeForm task={task} onChange={setTask} formActive={setFormActive}/> : <TaskTitle>Название: {task.title}</TaskTitle>}
            <StatusSpan>Статус: {task.isDone ? 'Выполнено' : 'Не выполнено'}</StatusSpan>
            <ButtonBox>
                <DefaultButton onClick={toggleForm}>Изменить</DefaultButton>
                <DefaultButton onClick={() => setModalActive(true)}>Удалить</DefaultButton>
                {modalActive && createPortal(
                    <MyModal task={task.title} remove={onRemove} onClose={closeModal}/>, document.body
                )}
            </ButtonBox>
        </SingleTaskStyles>
    );
};

export default SingleTask;