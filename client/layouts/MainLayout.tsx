import React from 'react';
import Navbar from "../components/Navbar";

const MainLayout = (props: { children: any }) => {
    return (
        <Navbar>
            { props.children }
        </Navbar>
    );
};

export default MainLayout;