import {useState, useEffect, useCallback} from 'react';
import axios, {AxiosRequestConfig, AxiosResponse, isAxiosError} from 'axios';

// слой абстракции над механизмом запроса принимающий uri и обрабатывающий запрос. В зависимости от состояния запроса мы можем
// менять интерфейс в компонентах

export const useFetch = (uri: string, method?: string, payload?: any) => {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);

    const request = useCallback(async () => {
        try {
            const response: AxiosResponse = await axios({url: uri, method: method, data: payload} as AxiosRequestConfig);
            setData(response.data);
        } catch (error: any) {
            if (isAxiosError(error)) {
                setError(`Что-то пошло не так с axios запросом :( ${error.message}`);
            } else {
                setError(`Что-то пошло не так :( ${error.message}`);
            }
        } finally {
            setLoading(false);
        }
    }, [uri, method, payload]);



    useEffect( () => {
        if (!uri) return;
        request();
    }, [uri, request]);

    return {
        data,
        error,
        loading,
    }
};