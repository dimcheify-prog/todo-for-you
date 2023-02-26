import React from 'react';
import {SingleTaskPageStyles} from "./SingleTaskPage.styles";
import {useFetch} from "../../hooks/useFetch";
import {Watch} from "react-loader-spinner";
import ErrorComponent from "../../components/Error/ErrorComponent";
import {useLocation} from 'react-router-dom';
import SingleTask from "../../components/SingleTask/SingleTask";
import GoBackButton from "../../components/UI/Buttons/GoBackButton";

const SingleTaskPage : React.FC = () => {
    console.log('SingleTaskPage render')
    const location = useLocation()
    const id = location.pathname
    const {data, error, loading} = useFetch(`http://localhost:8000/tasks/${id}`);

    if (loading) return <Watch />;
    if (error) return <ErrorComponent error={error} />
    return (
        <SingleTaskPageStyles>
            <GoBackButton/>
            <SingleTask data={data} />
        </SingleTaskPageStyles>
    );
};

export default SingleTaskPage;