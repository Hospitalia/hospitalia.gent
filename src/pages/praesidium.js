import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Person from "../components/person";

import "./styles/praesidium.css";

const Praesidium = () => {
    const data = useStaticQuery(graphql`
        query PraesidiumQuery {
            site {
                praesidium {
                    title
                    name
                    email
                    image
                }
            }
        }
    `);

    return (
        <Layout>
            <div className="container page">
                <SEO title="Page two" />
                <h2>Praesidium</h2>
                <p>
                    Het praesidium is verantwoordelijk voor het organiseren van
                    activiteiten.
                </p>
                <section className="praesidium">
                    {data.site.praesidium.map(el => (
                        <div className="card" key={el.title}>
                            <Person
                                title={el.title}
                                name={el.name}
                                email={el.email}
                                image={el.image}
                                large
                            />
                        </div>
                    ))}
                </section>
                <Link to="/">Go back to the homepage</Link>
            </div>
        </Layout>
    );
};

export default Praesidium;
