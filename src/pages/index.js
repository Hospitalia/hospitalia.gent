import React, { useState, useEffect } from "react";

import Header from "../components/header";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Person from "../components/person";

import praesidium from "../content/praesidium.json";

const IndexPage = () => {

    const [praeses, setPraeses] = useState(null)
    const [temmer, setTemmer] = useState(null)
    const [pr, setPR] = useState(null)

    useEffect(() => {
        const praesesObj = praesidium.filter(obj => {
            return obj.title === "Praeses"
        })
        setPraeses(praesesObj[0])

        const temmerObj = praesidium.filter(obj => {
            return obj.title === "Schachtentemmer"
        })
        setTemmer(temmerObj[0])

        const prObj = praesidium.filter(obj => {
            return obj.title === "PR"
        })
        setPR(prObj[0])
    }, [])

    return (
        <Layout>
            <SEO title="Home" />
            <Header />
            <section className="container card intro neumorphic">
                <img
                    className="logo"
                    src="assets/ad_astra.png"
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
                    href="/assets/ad_astra_sem1-2020.pdf"
                    className="button"
                >
                    <img
                        src="/assets/icons/download.png"
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

                    {praeses ? (
                        <Person
                            title={praeses.title}
                            name={praeses.name}
                            email={praeses.email}
                            image={praeses.image}
                        />
                    ) : null}
                    {temmer ? (
                        <Person
                            title={temmer.title}
                            name={temmer.name}
                            email={temmer.email}
                            image={temmer.image}
                        />
                    ) : null}

                    {pr ? (
                        <Person
                            title={pr.title}
                            name={pr.name}
                            email={pr.email}
                            image={pr.image}
                        />
                    ) : null}
                </div>
            </section>

            <section className="container kalender">
                <h2>Kalender</h2>
                <img
                    className="neumorphic"
                    src="/assets/kalender.jpg"
                    alt="Kalender"
                />
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/assets/hospitalia-sem2.pdf"
                    className="button"
                >
                    <img src="/assets/icons/download.png" alt="PDF Download" />
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
                            src="/assets/social/facebook.jpg"
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
                            src="/assets/social/instagram.jpg"
                            alt="Instagram"
                        />
                        <p>HospitaliaGent</p>
                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/hospi_alpaca_danny/"
                    >
                        <img
                            className="small rounded"
                            src="/assets/social/instagram.jpg"
                            alt="Snapchat"
                        />
                        <p>hospi_alpaca_danny</p>
                    </a>
                </div>
            </section>
        </Layout>
    );
};

export default IndexPage;
