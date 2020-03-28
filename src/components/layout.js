import React from "react";
import PropTypes from "prop-types";

import Nav from "./nav";
import Sidebar from "./Sidebar";
import Footer from "./footer";

import "./normalize.css";
import "./main.css";

const Layout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <Nav />
            <main>{children}</main>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
