module.exports = {
  siteMetadata: {
    title: `Daniel Alexander Fernandes`,
    author: `Daniel Fernandes`,
    position: `Front-end Web Developer`,
    email: `ddanfernan@gmail.com`,
    phoneInt: 5149685526,
    phoneStr: `(514)968-5526`,
    
    description: `My name is Daniel Alexander Fernandes and I am a freelance front-end web developer from Winnipeg, MB currently located in Montreal, QC. I am especially interested in simple website design, UI/UX, and React. The websites I make usually use the jamstack of Gatsby / React / Contentful / Netlify.`,
    skills: ['HTML', 'JavaScript', 'React', 'Gatsby', 'Wordpress', 'CSS & SASS', 'A11y', 'Figma', "Photoshop"]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: ``,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e82ldd7rek1u`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `QotnjaeWy1Zm54yb-0sicbgRtw7nJ5f8DR5CQ4IP2n4`,
      },
    },
    `gatsby-plugin-transition-link`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
