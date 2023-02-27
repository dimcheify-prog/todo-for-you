import React, {useCallback} from 'react';
import {SingleTaskPageStyles} from "./SingleTaskPage.styles";
import {useFetch} from "../../hooks/useFetch";
import {Watch} from "react-loader-spinner";
import ErrorComponent from "../../components/Error/ErrorComponent";
import {useLocation} from 'react-router-dom';
import SingleTask from "../../components/SingleTask/SingleTask";
import GoBackButton from "../../components/UI/Buttons/GoBackButton";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const SingleTaskPage : React.FC = () => {
    console.log('SingleTaskPage render')
    const location = useLocation();
    const id = location.pathname;
    const navigate = useNavigate();
    const {data, error, loading} = useFetch(`http://localhost:8000/tasks/${id}`, 'get');

    const handleRemove = useCallback((e: React.SyntheticEvent) => {
        e.preventDefault();
        axios({url: `http://localhost:8000/tasks/${id}`, method: 'delete'});
        navigate(-1);
    }, [id]);

    if (loading) return <Watch />;
    if (error) return <ErrorComponent error={error} />
    return (
        <SingleTaskPageStyles>
            <GoBackButton/>
            <SingleTask data={data} onRemove={handleRemove}/>
        </SingleTaskPageStyles>
    );
};

export default SingleTaskPage;