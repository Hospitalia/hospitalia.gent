import React from "react";

import "./footer.css";
import { Link } from "gatsby";

import "./sidebar.css";

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <Link to="/membership">Lid worden</Link>
            <div className="submenu-parent">
                Over ons
                <div className="submenu">
                    <Link to="/about">Algemeen</Link>
                    <Link to="/about/praesidium">Praesidium</Link>
                    <Link to="/about/propraesidia">Propraesidia</Link>
                    <Link to="/about/statutes">Statuten</Link>
                </div>
            </div>
            <Link to="/ad-astra">Ad Astra</Link>
            <Link to="/sponsors">Sponsors</Link>
        </nav>
    )
};

export default Sidebar;
