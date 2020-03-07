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
            <Link to="/praesidium">Praesidium</Link>
            <Link to="/sponsors">Sponsors</Link>
            <Link to="/ad-astra">Ad Astra</Link>
        </div>
    </nav>
);

export default Nav;
