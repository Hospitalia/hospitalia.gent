import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
    <Layout>
        <div className="container page four-oh-four">
            <SEO title="404: Not found" />
            <h1 className="large">404 Error</h1>
            <p>De pagina die je zoekt bestaat niet. <a href="/">Klik hier</a> om terug te keren naar de homepagina.</p>
        </div>
    </Layout>
);

export default NotFoundPage;
