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
            <Link to="/membership">Lid worden</Link>
            <Link to="/about">Over ons</Link>
            <Link to="/ad-astra">Ad Astra</Link>
            <Link to="/sponsors">Sponsors</Link>
        </div>
    </nav>
);

export default Nav;
