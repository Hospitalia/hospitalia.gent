import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Sponsors = () => (
    <Layout>
        <div className="container page">
            <SEO title="Sponsors" />
            <h2>Sponsors</h2>
            <p>
                Deze sponsors en hun bijdragen maken het voor ons mogelijk om
                activiteiten te organiseren.
            </p>
            <section className="sponsors"></section>
        </div>
    </Layout>
);

export default Sponsors;
