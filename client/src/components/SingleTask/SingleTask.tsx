import React, {useState} from 'react';
import {SingleTaskStyles, TaskTitle, ButtonBox, StatusSpan} from "./SingleTask.styles";
import {ITask} from "../../interfaces/taskInterface";
import {DefaultButton} from "../UI/Buttons/DefaultButton.styles";
import MyChangeForm from "../Forms/MyChangeForm";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import MyModal from "../MyModal/MyModal";
import {createPortal} from "react-dom";

interface ISingleTaskProps {
    data: ITask;
}

const SingleTask : React.FC<ISingleTaskProps> = ({data}) => {
    console.log('SingleTask render')
    const [task, setTask] = useState<ITask>(data);
    const [formActive, setFormActive] = useState<boolean>();
    const [modalActive, setModalActive] = useState<boolean>();
    const navigate = useNavigate();

    const toggleForm = (e:React.SyntheticEvent) => {
        e.preventDefault();
        setFormActive(true);
    };

    const removeTaskRequest = async () => {
      axios.delete(`http://localhost:8000/tasks/${data.id}`);
    };

    const handleRemove = (e: React.SyntheticEvent) => {
        e.preventDefault();
        removeTaskRequest();
        navigate(-1);
    }

    const closeModal = () => {
        setModalActive(false);
    };

    return (
        <SingleTaskStyles>
            {formActive ? <MyChangeForm task={task} changeTask={setTask} formActive={setFormActive}/> : <TaskTitle>Название: {task.title}</TaskTitle>}
            <StatusSpan>Статус: {task.isDone ? 'Выполнено' : 'Не выполнено'}</StatusSpan>
            <ButtonBox>
                <DefaultButton onClick={toggleForm}>Изменить</DefaultButton>
                <DefaultButton onClick={() => setModalActive(true)}>Удалить</DefaultButton>
                {modalActive && createPortal(
                    <MyModal task={task.title} remove={handleRemove} onClose={closeModal}/>, document.body
                )}
            </ButtonBox>
        </SingleTaskStyles>
    );
};

export default SingleTask;