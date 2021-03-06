require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    siteTitle:"Matías Racedo - Portfolio",
    siteTitleAlt: "Matías Racedo - Portfolio",
    siteHeadline: "Site developed with Gatsby and TypeScript",
    siteUrl: "https://matiasracedo.github.io/",
    siteDescription: "Hi! I'm Matías, Full Stack Developer. I'm passionate about new technologies and software development, I'm a quick learner and I love challenges!",
    siteLanguage: "en",
    siteImage: "favicon.png",
    author: "Matias Racedo",
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
        start_url: `/`,
        background_color: `#e2718d`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicon.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-formium`,
      options: {
        projectId: process.env.GATSBY_FORMIUM_PROJECTID,
        accessToken: process.env.FORMIUM_TOKEN,
      },
    },
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
