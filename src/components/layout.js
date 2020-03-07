import React from "react";
import PropTypes from "prop-types";

import Footer from "./footer";
import Nav from "./nav";

import "./normalize.css";
import "./main.css";

const Layout = ({ children }) => {
    return (
        <>
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
