import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

const Statutes = () => {
    return (
        <Layout>
            <div className="container page">
                <SEO title="Statuten" />
                <h2>Statuten</h2>

                <iframe className="statutes" src="/assets/statuten_hospitalia.pdf"></iframe>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/assets/statuten_hospitalia.pdf"
                    className="button"
                >
                    <img
                        src="/assets/icons/download.png"
                        alt="Statuten PDF Download"
                    />
                    Download de statuten
                </a>
            </div>
        </Layout>
    );
};

export default Statutes;
