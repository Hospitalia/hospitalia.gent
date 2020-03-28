module.exports = {
    siteMetadata: {
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
                short_name: `hospi-gent`,
                start_url: `/`,
                background_color: `#F3F7FA`,
                theme_color: `#003C92`,
                display: `minimal-ui`,
                icon: `src/images/hospi-icon.png`, // This path is relative to the root of the site.
            },
        }
    ],
};
