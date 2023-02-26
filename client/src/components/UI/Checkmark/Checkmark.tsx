import React, {useState} from 'react';
import {CheckmarkStyles} from "./Checkmark.styles";

interface ICheckmarkProps {
    status: boolean;
    changeStatus: (result : boolean) => void;
}

const Checkmark : React.FC<ICheckmarkProps> = ({status, changeStatus}) => {
    const [toggle, setToggle] = useState<boolean>(status);

    const onComplete = () => {
        setToggle(!toggle);
        changeStatus(!toggle);
    };

    return (
        <>
            {toggle ? <CheckmarkStyles onClick={onComplete}/> : <CheckmarkStyles onClick={onComplete} opacity={'0.3'}/>}
        </>
    );
};

export default Checkmark;