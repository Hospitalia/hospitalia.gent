import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Praesidium = () => (
    <Layout>
        <div className="container">
            <SEO title="Page two" />
            <h1>Praesidium</h1>
            <p>Welcome to Praesidium</p>
            <Link to="/">Go back to the homepage</Link>
        </div>
    </Layout>
);

export default Praesidium;
