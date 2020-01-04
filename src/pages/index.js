import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Email from "../components/email";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <section className="container card">
            <section className="intro">
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
                    Ben je sponsor of heb je interesse om met ons samen te
                    werken? Dan hoort onze praeses Liäm graag meer van je. Voor
                    vragen over de doop of lidmaatschap kan je terecht bij onze
                    schachtentemmer Christoph. Voor andere vragen kan onze P.R.
                    Sieghe je de nodige antwoorden bezorgen.
                </p>

                <div class="socials">
                    <Email
                        title="Praeses"
                        name="Liäm De Kegel"
                        email="praeses(at)hospitalia(dot)gent"
                        image="liam.jpg"
                    />
                    <Email
                        title="Schachtentemmer"
                        name="Christoph Boeykens"
                        email="temmer(at)hospitalia(dot)gent"
                        image="chris.jpg"
                    />
                    <Email
                        title="P.R."
                        name="Sieghe Parijs"
                        email="pr(at)hospitalia(dot)gent"
                        image="sieghe.jpg"
                    />
                </div>
            </section>
        </section>

        <section class="container kalender">
            <h2>Kalender</h2>
            <img
                src="http://hospitalia.gent/assets/kalender.jpg"
                alt="Kalender"
            />
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://hospitalia.gent/assets/hospitalia-sem1.pdf"
                class="button"
            >
                <img
                    src="http://hospitalia.gent/assets/icons/download.png"
                    alt="PDF Download"
                />
                Download kalender
            </a>
        </section>

        <section class="container social">
            <h2>Social Media</h2>
            <div class="socials">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/Studentenclub-Hospitalia-517228918320521/"
                >
                    <img
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
                        src="http://hospitalia.gent/assets/social/snapchat.jpg"
                        alt="Snapchat"
                    />
                    <p>hospigent</p>
                </a>
            </div>
        </section>
    </Layout>
);

export default IndexPage;
