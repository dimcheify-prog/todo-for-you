import React from 'react';
import {CreateTaskPageStyles} from "./CreateTaskPage.styles";
import MyCreateForm from "../../components/Forms/MyCreateForm";
import GoBackButton from "../../components/UI/Buttons/GoBackButton";

const CreateTaskPage = () => {
    console.log('CreateTaskPage render')
    return (
        <CreateTaskPageStyles>
            <GoBackButton />
            <MyCreateForm />
        </CreateTaskPageStyles>
    );
};

export default CreateTaskPage;