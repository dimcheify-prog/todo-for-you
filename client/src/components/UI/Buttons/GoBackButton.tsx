import React from 'react';
import {useNavigate} from "react-router-dom";
import {FaArrowCircleLeft} from "react-icons/fa";

const GoBackButton = () => {
    const navigate = useNavigate();

    const handleClick = (e: React.SyntheticEvent) => {
        e.preventDefault();
        navigate(-1);
    };

    return (
        <FaArrowCircleLeft size={'5rem'} color={'#61989d'} cursor={'pointer'} onClick={handleClick}/>
    );
};

export default GoBackButton;