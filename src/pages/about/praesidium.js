import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Person from "../../components/person";

import praesidium from "../../content/praesidium.json";

import "../styles/praesidium.css";

const Praesidium = () => {
    return (
        <Layout>
            <div className="container page">
                <SEO title="Praesidium" />
                <h2>Praesidium</h2>
                <p>
                    Het praesidium is verantwoordelijk voor het organiseren van
                    alle activiteiten.
                </p>
                <section className="praesidium">
                    {praesidium.map(el => (
                        <div className="card" key={el.title}>
                            <Person
                                title={el.title}
                                name={el.name}
                                education={el.education}
                                email={el.email}
                                image={el.image}
                            />
                        </div>
                    ))}
                </section>
            </div>
        </Layout>
    );
};

export default Praesidium;
