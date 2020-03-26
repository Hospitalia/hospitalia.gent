import React from "react";

import "./footer.css";
import { Link } from "gatsby";

import "./nav.css";

const Nav = () => (
    <nav>
        <div className="container">
            <Link to="/">
                <img
                    src="http://hospitalia.gent/assets/schild.png"
                    alt="Hospitalia"
                />
                Hospitalia
            </Link>
            <button className="mobile-nav">
                <img src="/assets/icons/menu.png" alt="Open side menu" />
            </button>
            <div className="desktop-nav">
                <Link to="/membership">Lid worden</Link>
                <div href="#" onClick={(e) => e.preventDefault()} className="submenu-parent">Over ons <img className="icon" alt="Dropdown icon" src="/assets/icons/down.png" />
                    <div className="submenu">
                        <Link to="/about/general">Algemeen</Link>
                        <Link to="/about/history">Geschiedenis</Link>
                        <Link to="/about/praesidium">Praesidium</Link>
                        <Link to="/about/propraesidia">Propraesidia</Link>
                        <Link to="/about/statutes">Statuten</Link>
                    </div>
                </div>
                <Link to="/ad-astra">Ad Astra</Link>
                <Link to="/sponsors">Sponsors</Link>
            </div>
        </div>
    </nav>
);

export default Nav;
