import React, {useState} from 'react';
import {CheckmarkStyles} from "./Checkmark.styles";

interface ICheckmarkProps {
    status: boolean;
    changeStatus: () => void;
}

const Checkmark : React.FC<ICheckmarkProps> = ({status, changeStatus}) => {
    return (
        <CheckmarkStyles onClick={changeStatus} status={status}/>
    );
};

export default Checkmark;