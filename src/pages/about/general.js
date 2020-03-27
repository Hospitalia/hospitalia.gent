import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import "../styles/about.css"

const General = () => {
    return (
        <Layout>
            <div className="container page">
                <SEO title="Algemeen" />
                <h2>Algemeen</h2>

                <h3>Dies Natalis</h3>
                <p>Op 15 oktober 2008 is Hospitalia opgericht. De Dies Natalis is dus de geboortedag van onze club en wordt gevierd op <b>15 oktober</b>. Indien deze dag tijdens het weekend valt, wordt de Dies Natalis gevierd op de clubavond in de week van 15 oktober.</p>

                <h3>Clubleuze</h3>
                <p>Hospitalia heeft als clubleuze <b>Per aspera ad astra</b>, wat staat voor <q>langs moeilijke wegen naar de sterren.</q></p>

                <h3>Mascotte</h3>
                <p>Sinds 2019 is <b>Danny de blije alpaca</b> onze mascotte. Tijdens het ontgroeningsweekend van jaar 12 (academiejaar 2018-2019) hebben onze leden de geboorte van een alpaca mogen meemaken, en is onze club trotse peter geworden van het pasgeboren diertje. Dit vond plaats op 6 april 2019 in alpacaboerderij <a href="https://www.deblijealpaca.be/" target="_blank" rel="noopener noreferrer">De Blije Alpaca</a> in Lokeren.</p>

                <img src="/assets/danny.png" alt="Certificaat peterschap Danny" />

                <h3>Schild en vlag</h3>
                <section className="row">
                    <div>
                        <p>Het wapenschild van Hospitalia heeft de vorm van een heraldisch schild. Links zien we het rode kruis, dat staat voor vrijwillige hulpverlening aan zieken en gewonden. Dit rode kruis maakt deel uit een spuit, een veel gebruikt instrument in de gezondheidszorg. Rechts in het schild vinden we de clubkleuren. Blauw is de kleur van verpleegkundigen en bordeaux staat voor het bloed waar we mee te maken krijgen. Daarop staat het monogram getekend in het zwart. Dit is samengesteld uit de letters V, C, F, en vervolgens de eerste letter van onze club H. De letters staan voor <q>Vivat, crescat et floreat</q>, dit is Latijn voor <q>Leef, groei en bloei</q>.</p>

                        <p>Hospitalia heeft 2 schilden. Het eerste werd gemaakt in het jaar 2010-2011 door Jan D’Huyvetter (pro-senior reGent). Dit schild hangt omhoog in ons clubcafé. In 2018 kwam er een bij, gemaakt door Alain De Kegel. Daarnaast hebben we ook nog een vlag, gemaakt door Amélie Saverys in 2011-2012. Een aantal jaar later, kwam er door het praesidium 2015-2016 een nieuwe vlag bij.</p>
                    </div>
                    <img className="schild" src="/assets/schild.png" alt="Schild Hospitalia" />
                </section>


                <h3>Clubcafé</h3>
                <p>De peter van de club is Maarten Boucquez en het clubcafé is <b>’t Kofschip</b>, Overpoortstraat 96 te Gent. De vorige eigenaar van ’t Kofschip en eveneens onze vorige peter was Antoine Govaert. De andere clubs in ’t Kofschip zijn reGent, Acantha en Ideefix.</p>

                <h3>Doelgroepen</h3>
                <p>Wij zijn een studentenvereniging opgericht voor de studierichtingen in de gezondheidszorg aan de Arteveldehogeschool Gent, zijn de Bachelor in de <em>verpleegkunde</em>, <em>vroedkunde</em>,{" "}
                    <em>mondzorg</em>, <em>ergotherapie</em>, <em>logopedie</em>
                    , <em>audiologie</em> en <em>podologie</em>.</p>

                <h3>Clublied</h3>
                <p>In gezondheidszorg, is’t geestig om te zijn. <br />
                Wij zijn zo blij, we zijn zo blij <br />
                We doen wat we willen, zo moet het zijn, <br />
                Hospitalia is vrij.</p>

                <p>Op water en op land gaat het verhaal.<br />
                Van Hospitalia, wij allemaal.<br />
                Want iedereen wil maar twee dingen,<br />
                en dat zijn zuipen en veel zingen.</p>

                <p>Hospitalia zorgt voor sfeer en goede vrienden,<br />
                zwijnen zit ons in het bloed.<br />
                Een betere club zal je nergens vinden.<br />
                Feesten doen wij echt wel goed.</p>

                <p>Op water en op land gaat het verhaal.<br />
                Van Hospitalia, wij allemaal.<br />
                Want iedereen wil maar twee dingen,<br />
                en dat zijn zuipen en veel zingen.</p>

                <p>Studenten vanuit Gent, pak de fiets, de tram, de bus.<br />
                Kom naar hier, ja kom naar hier.<br />
                Wij legen vaten, glazen, als je wil dan krijg j’een kus,<br />
                en er is hier echt goed bier.</p>

                <p>Op water en op land gaat het verhaal.<br />
                Van Hospitalia, wij allemaal.<br />
                Want iedereen wil maar twee dingen,<br />
                en dat zijn zuipen en veel zingen.<br />
                Ja, iedereen wil vele dingen,<br />
                waaronder zuipen en veel zingen.</p>

                <p><b>Dit lied wordt gezongen op het ritme van Der Pappenheimer. Een voorbeeld van hoe het gezongen wordt vind je <a href="https://soundcloud.com/laurens-vandevyver/hospitalia-clublied-cantor-2016" target="_blank" rel="noopener noreferrer">hier</a>.</b></p>
            </div>
        </Layout>
    );
};

export default General;
