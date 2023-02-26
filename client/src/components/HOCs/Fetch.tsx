import React from 'react';
import {useFetch} from "../../hooks/useFetch";
import {Watch} from "react-loader-spinner";
import ErrorPage from "../Error/ErrorComponent";

interface IFetchProps {
    uri: string;
    onSuccess: any;
    onError?: any;
    onPending?: any;
}

const Fetch : React.FC<IFetchProps> = ({
    uri,
    onSuccess,
    onError = (error: any) => <ErrorPage error={error}/>,
    onPending = <Watch />
               }) => {
    const {data, error, loading} = useFetch(uri);

    if (loading) return onPending;
    if (error) return onError(error);
    if (data) return onSuccess({data})
};

export default Fetch;