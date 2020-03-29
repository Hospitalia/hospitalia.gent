import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Person from "../../components/person";

import propraesidia from "../../content/propraesidia.json";

import "../styles/praesidium.css";

const Propraesidia = () => {
    return (
        <Layout>
            <div className="container page">
                <SEO title="Propraesidia" />
                <h2>Propraesidia</h2>
                <p>
                    Deze personen hebben Hospitalia gevormd tot de club die we nu zijn.
                </p>
                <section className="propraesidia">
                    {propraesidia.map(el => (
                        <div className="card">
                            <h2>{el.year}</h2>
                            {
                                el.members.map(member => (
                                    <div className="propraesidium" key={member.name}>
                                        <Person
                                            title={member.title}
                                            name={member.name}
                                        />
                                    </div>
                                ))
                            }

                        </div>
                    ))}
                </section>
            </div>
        </Layout>
    );
};

export default Propraesidia;
