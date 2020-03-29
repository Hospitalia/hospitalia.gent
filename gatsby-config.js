module.exports = {
    siteMetadata: {
        siteUrl: `http://hospitalia.gent/`,
        title: `Studentenclub Hospitalia`,
        description: `Hospitalia is dé Gentse studentenclub voor studenten gezondheidszorg aan de Arteveldehogeschool!`,
        author: `@manaus_t`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Studentenclub Hospitalia`,
                short_name: `Hospitalia`,
                start_url: `/`,
                background_color: `#F3F7FA`,
                theme_color: `#003C92`,
                display: `standalone`,
                icon: `src/images/hospi-icon.png`, // This path is relative to the root of the site.
                icons: [{
                    src: `favicon/icon-48x48.png`,
                    sizes: `48x48`,
                    type: `image/png`,
                },
                {
                    src: `favicon/icon-72x72.png`,
                    sizes: `72x72`,
                    type: `image/png`,
                },
                {
                    src: `favicon/icon-96x96.png`,
                    sizes: `96x96`,
                    type: `image/png`,
                },
                {
                    src: `favicon/icon-144x144.png`,
                    sizes: `144x144`,
                    type: `image/png`,
                },
                {
                    src: `favicon/icon-192x192.png`,
                    sizes: `192x192`,
                    type: `image/png`,
                },
                {
                    src: `favicon/icon-256x256.png`,
                    sizes: `256x256`,
                    type: `image/png`,
                },
                {
                    src: `favicon/icon-384x384.png`,
                    sizes: `384x384`,
                    type: `image/png`,
                },
                {
                    src: `favicon/icon-512x512.png`,
                    sizes: `512x512`,
                    type: `image/png`,
                },
                ]
            },
        }
    ],
};
