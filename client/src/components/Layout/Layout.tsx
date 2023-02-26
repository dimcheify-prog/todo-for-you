import React from 'react';
import {Outlet} from 'react-router-dom';
import {Container} from "./Container.styles";

const Layout = () => {
    return (
        <Container>
            <Outlet/>
        </Container>
    );
};

export default Layout;