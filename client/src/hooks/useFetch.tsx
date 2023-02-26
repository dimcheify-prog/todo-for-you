import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

// слой абстракции над механизмом запроса принимающий uri и обрабатывающий запрос. В зависимости от состояния запроса мы можем
// менять интерфейс в компонентах

export const useFetch = (uri: string) => {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);

    const request = useCallback(async () => {
        try {
            const response = await axios.get(uri);
            if (response.status === 200) {
                setData(response.data);
                setLoading(false);
            }
        }  catch (error) {
            if (axios.isAxiosError(error)) {
                setError('Что-то пошло не так с axios запросом :(');
                setLoading(false);
            } else {
                setError('Что-то пошло не так :(');
                setLoading(false);
            }
        }
    }, [uri])



    useEffect(() => {
        if (!uri) return;
        request();
    }, [uri, request])

    return {
        data,
        error,
        loading,
    }
};