import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../components/header";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Person from "../components/person";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <Layout>
            <SEO title="Home" />
            <Header siteTitle={data.site.siteMetadata.title} />
            <section className="container card intro">
                <img
                    className="logo"
                    src="http://hospitalia.gent/assets/ad_astra.png"
                    alt="Ad Astra logo"
                />
                <h3>
                    1<span className="superscript">e</span> editie
                </h3>

                <p>
                    Ad Astra is ons semestrieel boekje. Deze allereerste editie
                    is het resultaat van een samenwerking tussen enkele
                    praesidiumleden, met de hulp van onze schachten en leden.
                    Bekijk deze oogopslag van het eerste semester van 2019-2020
                    en download Ad Astra!
                </p>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://hospitalia.gent/assets/ad_astra_sem1-2020.pdf"
                    className="button"
                >
                    <img
                        src="http://hospitalia.gent/assets/icons/download.png"
                        alt="Ad Astra PDF Download"
                    />
                    Download Ad Adstra
                </a>
            </section>

            <section className="container intro">
                <h2>Welkom bij Hospitalia</h2>
                <p>
                    Hospitalia is dé Gentse <em>studentenclub</em> voor de
                    richtingen gezondheidszorg van de Arteveldehogeschool.
                    Doorheen het academiejaar komen we op dinsdag om 21u samen
                    in ons clubcafé 't Kofschip in de Overpoortstraat. Het
                    praesidium voorziet dan verschillende leuke activiteiten en
                    we organiseren ook regelmatig een cantus.
                </p>

                <p>
                    Studeer je <em>verpleegkunde</em>, <em>vroedkunde</em>,{" "}
                    <em>mondzorg</em>, <em>ergotherapie</em>, <em>logopedie</em>
                    , <em>audiologie</em> of <em>podologie</em> aan de
                    Arteveldehogeschool? Kom dan zeker eens langs. Heb je zin om
                    lid te worden van onze vereniging of zit je met andere
                    vragen? Aarzel dan niet om ons te contacteren!
                </p>

                <p>
                    Als je sponsor bent of je hebt interesse om met ons samen te
                    werken, dan hoort onze praeses Liäm graag meer van je. Voor
                    vragen over de doop of lidmaatschap kan je terecht bij onze
                    schachtentemmer Christoph. Voor andere vragen kan onze P.R.
                    Sieghe je de nodige antwoorden bezorgen.
                </p>

                <div className="socials">
                    <Person
                        title="Praeses"
                        name="Liäm De Kegel"
                        email="praeses(at)hospitalia(dot)gent"
                        image="liam.jpg"
                    />
                    <Person
                        title="Schachtentemmer"
                        name="Christoph Boeykens"
                        email="temmer(at)hospitalia(dot)gent"
                        image="chris.jpg"
                    />
                    <Person
                        title="P.R."
                        name="Sieghe Parijs"
                        email="pr(at)hospitalia(dot)gent"
                        image="sieghe.jpg"
                    />
                </div>
            </section>

            <section className="container kalender">
                <h2>Kalender</h2>
                <img
                    src="http://hospitalia.gent/assets/kalender.jpg"
                    alt="Kalender"
                />
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://hospitalia.gent/assets/hospitalia-sem1.pdf"
                    className="button"
                >
                    <img
                        src="http://hospitalia.gent/assets/icons/download.png"
                        alt="PDF Download"
                    />
                    Download kalender
                </a>
            </section>

            <section className="container social">
                <h2>Social Media</h2>
                <div className="socials">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/Studentenclub-Hospitalia-517228918320521/"
                    >
                        <img
                            className="small rounded"
                            src="http://hospitalia.gent/assets/social/facebook.jpg"
                            alt="Facebook"
                        />
                        <p>Studentenclub Hospitalia</p>
                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/hospitaliagent/"
                    >
                        <img
                            className="small rounded"
                            src="http://hospitalia.gent/assets/social/instagram.jpg"
                            alt="Instagram"
                        />
                        <p>HospitaliaGent</p>
                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.snapchat.com/add/hospigent"
                    >
                        <img
                            className="small rounded"
                            src="http://hospitalia.gent/assets/social/snapchat.jpg"
                            alt="Snapchat"
                        />
                        <p>hospigent</p>
                    </a>
                </div>
            </section>
        </Layout>
    );
};

export default IndexPage;
