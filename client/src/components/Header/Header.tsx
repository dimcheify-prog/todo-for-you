import React from 'react';
import {HeaderWrapper, MainTitle} from "./Header.styles";
import { GrReactjs } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";
const Header = () => {
    return (
        <HeaderWrapper>
            <MainTitle>React <GrReactjs/> + TypeScript <SiTypescript/></MainTitle>
        </HeaderWrapper>
    );
};

export default Header;