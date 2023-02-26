import React from 'react';
import {MyModalStyles, ModalBody, TitleModal, TextModal, ButtonBoxModal} from "./MyModal.styles";
import {DefaultButton} from "../UI/Buttons/DefaultButton.styles";

interface IModalProps {
    onClose: React.SetStateAction<any>;
    task: string;
    remove: (e: React.SyntheticEvent) => void;
}

const MyModal : React.FC<IModalProps> = ({onClose, task, remove}) => {
    console.log('MyModal render')
    return (
        <MyModalStyles onClick={onClose}>
            <ModalBody onClick={(e: React.SyntheticEvent) => e.stopPropagation()}>
                <TitleModal>MODAL</TitleModal>
                <TextModal>Вы уверены что хотите удалить задачу {task} ?</TextModal>
                <ButtonBoxModal>
                    <DefaultButton onClick={remove}>Удалить</DefaultButton>
                    <DefaultButton onClick={onClose}>Отмена</DefaultButton>
                </ButtonBoxModal>
            </ModalBody>


        </MyModalStyles>
    );
};

export default MyModal;