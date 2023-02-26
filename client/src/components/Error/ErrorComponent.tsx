import React from 'react';

interface IErrorProps {
    error: string;
}

const ErrorComponent : React.FC<IErrorProps> = ({error}) => {
    console.log('ErrorComponent render')
    return (
        <div>
            <h1>{error}</h1>
        </div>
    );
};

export default ErrorComponent;