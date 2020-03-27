import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AdAstra = () => {
    return (
        <Layout>
            <div className="container page">
                <SEO title="Ad Astra" />
                <h2>Ad Astra</h2>

                <iframe className="statutes" src="/assets/ad_astra_sem1-2020.pdf"></iframe>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/assets/ad_astra_sem1-2020.pdf"
                    className="button"
                >
                    <img
                        src="/assets/icons/download.png"
                        alt="Statuten PDF Download"
                    />
                    Download Ad Astra
                </a>
            </div>
        </Layout>
    );
};

export default AdAstra;
