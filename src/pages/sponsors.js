import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Sponsor from "../components/sponsor";

import sponsors from "../content/sponsors.json";

import "./styles/sponsors.css";

const Sponsors = () => (
    <Layout>
        <div className="container page">
            <SEO title="Sponsors" />
            <h2>Sponsors</h2>
            <p>
                Deze sponsors en hun bijdragen maken het voor ons mogelijk om
                activiteiten te organiseren.
            </p>
            <section className="sponsors">
                {sponsors.map(el => (
                    <Sponsor
                        key={el.name}
                        name={el.name}
                        detail={el.detail}
                        url={el.url}
                        img={el.img}
                        description={el.description}
                        background={el.background}
                    />
                ))}
            </section>
        </div>
    </Layout>
);

export default Sponsors;
