import React from 'react';

interface IErrorProps {
    error: string;
}

const ErrorComponent : React.FC<IErrorProps> = ({error}) => {
    return (
        <div>
            <h1>{error}</h1>
        </div>
    );
};

export default ErrorComponent;