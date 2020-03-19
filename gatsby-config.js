require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Support Coffee Beings`,
    description: `A list of virtual tip jars so you can continue to support local businesses during the pandemic.`,
    author: `@tinylattegirl`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-97707239-3",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: "Tip Jars",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Support Coffee Beings`,
        short_name: `Coffee Beings`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/images/coffee-cup.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
