module.exports = {
    siteMetadata: {
        title: `Studentenclub Hospitalia`,
        description: `Hospitalia is dé Gentse studentenclub voor studenten gezondheidszorg aan de Arteveldehogeschool!`,
        author: `@manaus_t`,
    },
    praesidium: [
        {
            title: "Praeses",
            name: "Liäm De Kegel",
            email: "praeses(at)hospitalia(dot)gent",
            image: "liam.jpg",
        },
        {
            title: "Vice",
            name: "Joke Cools",
            email: "vice(at)hospitalia(dot)gent",
        },
        {
            title: "Quaestor",
            name: "Kiani Rubbrecht",
            email: "quaestor(at)hospitalia(dot)gent",
        },
        {
            title: "Ab-Actis",
            name: "Max Schuddinck",
            email: "ab-actis(at)hospitalia(dot)gent",
        },
        {
            title: "Schachtentemmer",
            name: "Christoph Boeykens",
            email: "temmer(at)hospitalia(dot)gent",
            image: "chris.jpg",
        },
        {
            title: "Cantor",
            name: "Diana Janicka",
            email: "cantor(at)hospitalia(dot)gent",
        },
        {
            title: "Zedenmeester",
            name: "Dagmar Das",
            email: "zeden(at)hospitalia(dot)gent",
        },
        {
            title: "PR",
            name: "Sieghe Parijs",
            email: "pr(at)hospitalia(dot)gent",
            image: "sieghe.jpg",
        },
        {
            title: "Cultuur",
            name: "Charlotte Sterkens",
            email: "cultuur(at)hospitalia(dot)gent",
        },
        {
            title: "Feest",
            name: "Lisa Walraeve",
            email: "feest(at)hospitalia(dot)gent",
        },
        {
            title: "Sport",
            name: "Sander Colpaert",
            email: "sport(at)hospitalia(dot)gent",
        },
        {
            title: "Web",
            name: "Manaus Transez",
            email: "web(at)hospitalia(dot)gent",
        },
    ],
    plugins: [
        `gatsby-plugin-react-helmet`,
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
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Roboto`,
                    },
                    {
                        family: `Oswald`,
                    },
                ],
            },
        },
    ],
};
