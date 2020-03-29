import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Person from "../components/person";

import praesidium from "../content/praesidium.json";

import "./styles/membership.css"

const Praesidium = () => {
    const [temmer, setTemmer] = useState(null)

    useEffect(() => {
        const temmerObj = praesidium.filter(obj => {
            return obj.title === "Schachtentemmer"
        })
        setTemmer(temmerObj[0])
    }, [])

    return (
        <Layout>
            <div className="container page membership">
                <SEO title="Lid worden" />
                <h1>Lid worden</h1>
                <div className="row">
                    <div>
                        <p>De snelste manier om lid te worden van onze club is door contact op te nemen met onze Schachtentemmer. Je kan ook naar een van onze clubavonden komen, wij ontvangen je met open armen. Een lidkaart kan je altijd aankopen bij onze Quaestor voor €5, waarna je kan genieten van de voordelen van onze <a href="/sponsors">sponsors</a>. Dopen is dus niet verplicht.</p>

                        {temmer ? (
                            <Person
                                title={temmer.title}
                                name={temmer.name}
                                email={temmer.email}
                                image={temmer.image}
                                large
                            />
                        ) : null}

                    </div>
                    <img src="/assets/lidkaart.jpg" alt="Lidkaart Hospitalia" />
                </div>

                <h2>Doop</h2>
                <p>Dit is het meest memorabele moment van je studententijd. Hier worden banden gesmeed die voor de rest van je leven zullen meegaan. De doop vindt aan het begin van het academiejaar plaats. En geen zorgen, aan de blije gezichten op deze foto zie je dat het allemaal wel meevalt. Gewoon doen!</p>
                <img src="/assets/doop-2019.jpg" alt="Doop 2019" />
                <img src="/assets/doop-2018.jpg" alt="Doop 2018" />
                <img src="/assets/doop-2017.jpg" alt="Doop 2017" />
            </div>
        </Layout>
    );
};

export default Praesidium;
