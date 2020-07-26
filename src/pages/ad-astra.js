import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import editions from "../content/ad-astra.json";

import "./styles/ad-astra.css"

const AdAstra = () => {
    return (
        <Layout>
            <div className="container page ad-astra full-page ">
                <SEO title="Ad Astra" />
                <h2>Ad Astra</h2>

                <p>Ad Astra is ons semestrieel boekje waarin we, met de hulp van onze schachten en leden, reflecteren over het afgelopen semester. Bekijk hier al onze vorige edities!</p>

                <section className="list">
                    {editions.map((edition, i) => (
                        <a className="edition" href={`/assets/ad-astra/${edition.file_name}`} target="_blank">
                            <span className="semester">{edition.semester.replace(/(^.)/, m => m.toUpperCase())} semester {edition.academic_year}</span>

                            <img src="/assets/icons/download.png" alt="Download" />
                        </a>
                    ))}
                </section>
            </div>
        </Layout>
    );
};

export default AdAstra;
