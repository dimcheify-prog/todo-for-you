import React from 'react';
import {useNavigate} from "react-router-dom";
import {FaArrowCircleLeft} from "react-icons/fa";
import {GoBackButtonStyles} from "./GoBackButton.styles";

const GoBackButton = () => {
    const navigate = useNavigate();

    const handleClick = (e: React.SyntheticEvent) => {
        e.preventDefault();
        navigate(-1);
    };

    return (
        <GoBackButtonStyles onClick={handleClick} />
    );
};

export default GoBackButton;