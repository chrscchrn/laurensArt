module.exports = {
  pathPrefix: "/laurensArt",
  siteMetadata: {
    title: "laurens-art",
    siteUrl: "https://chrscchrn.github.io/laurensArt/",
    description: "Browse art ranging from paintings to 3D renderings of the Providence area. Lauren's Art is a portfolio full of all kinds of art.",
    image: "favicon-32x32.png",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lauren's Art`,
        short_name: `Yarr`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/images/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/images/anime/anime.gif`,
            sizes: `970x647`,
            type: `image/gif`,
          },
          {
            src: `/images/artichoke/1.jpg`,
            sizes: `750x1036`,
            type: `image/jpg`,
          },
          {
            src: `/images/artichoke/2.jpg`,
            sizes: `750x1016`,
            type: `image/jpg`,
          },
          {
            src: `/images/artichoke/3.jpg`,
            sizes: `750x1035`,
            type: `image/jpg`,
          },
          {
            src: `/images/artichoke/4.jpg`,
            sizes: `750x1013`,
            type: `image/jpg`,
          },
          {
            src: `/images/artichoke/final.jpg`,
            sizes: `990x750`,
            type: `image/jpg`,
          },
          {
            src: `/images/charcoal/BENEFITST.jpg`,
            sizes: `750x836`,
            type: `image/jpg`,
          },
          {
            src: `/images/charcoal/BENEFITST.N.jpg`,
            sizes: `1062x750`,
            type: `image/jpg`,
          },
          {
            src: `/images/charcoal/TIME.jpg`,
            sizes: `750x993`,
            type: `image/jpg`,
          },
          {
            src: `/images/dance-studio/Slide1.png`,
            sizes: `960x540`,
            type: `image/png`,
          },
          {
            src: `/images/dance-studio/Slide2.png`,
            sizes: `960x540`,
            type: `image/png`,
          },
          {
            src: `/images/dance-studio/Slide3.png`,
            sizes: `960x540`,
            type: `image/png`,
          },
          {
            src: `/images/dance-studio/Slide4.png`,
            sizes: `960x540`,
            type: `image/png`,
          },
          {
            src: `/images/dance-studio/Slide5.png`,
            sizes: `960x540`,
            type: `image/png`,
          },
          {
            src: `/images/dance-studio/Slide6.png`,
            sizes: `960x540`,
            type: `image/png`,
          },
          {
            src: `/images/dance-studio/Slide7.png`,
            sizes: `960x540`,
            type: `image/png`,
          },
          {
            src: `/images/dance-studio/Slide8.png`,
            sizes: `960x540`,
            type: `image/png`,
          },
          {
            src: `/images/dance-studio/Slide9.png`,
            sizes: `960x540`,
            type: `image/png`,
          },
          {
            src: `/images/dance-studio/Slide10.png`,
            sizes: `960x540`,
            type: `image/png`,
          },
          {
            src: `/images/map/map.jpg`,
            sizes: `1015x750`,
            type: `image/jpg`,
          },
          {
            src: `/images/menuItems/artichoke.jpg`,
            sizes: `500x500`,
            type: `image/jpg`,
          },
          {
            src: `/images/menuItems/audio.png`,
            sizes: `500x500`,
            type: `image/png`,
          },
          {
            src: `/images/menuItems/BENEFITST.jpg`,
            sizes: `500x500`,
            type: `image/jpg`,
          },
          {
            src: `/images/menuItems/insideCover.png`,
            sizes: `500x500`,
            type: `image/png`,
          },
          {
            src: `/images/menuItems/map.jpg`,
            sizes: `500x500`,
            type: `image/jpg`,
          },
          {
            src: `/images/menuItems/me5.png`,
            sizes: `500x500`,
            type: `image/png`,
          },
          {
            src: `/images/menuItems/utensils.jpg`,
            sizes: `500x500`,
            type: `image/jpg`,
          },
          {
            src: `/images/menuItems/walkrend1.png`,
            sizes: `500x500`,
            type: `image/png`,
          },
          {
            src: `/images/menuItems/wii.png`,
            sizes: `500x500`,
            type: `image/png`,
          },
          {
            src: `/images/meta/me1.png`,
            sizes: `1429x1540`,
            type: `image/png`,
          },
          {
            src: `/images/meta/me2.png`,
            sizes: `1407x1514`,
            type: `image/png`,
          },
          {
            src: `/images/meta/me3.png`,
            sizes: `2557x1892`,
            type: `image/png`,
          },
          {
            src: `/images/meta/me4.png`,
            sizes: `2726x1859`,
            type: `image/png`,
          },
          {
            src: `/images/meta/me5.png`,
            sizes: `1417x1598`,
            type: `image/png`,
          },
          {
            src: `/images/scrapbook/a.png`,
            sizes: `5400x5400`,
            type: `image/png`,
          },
          {
            src: `/images/scrapbook/b.png`,
            sizes: `1298x1298`,
            type: `image/png`,
          },
          {
            src: `/images/scrapbook/c.png`,
            sizes: `2592x1295`,
            type: `image/png`,
          },
          {
            src: `/images/scrapbook/d.png`,
            sizes: `2592x1296`,
            type: `image/png`,
          },
          {
            src: `/images/utensils/front.jpg`,
            sizes: `4032x3024`,
            type: `image/jpg`,
          },
          {
            src: `/images/utensils/side.jpg`,
            sizes: `3579x2276`,
            type: `image/jpg`,
          },
          {
            src: `/images/walk/walkrend1.png`,
            sizes: `1409x1404`,
            type: `image/png`,
          },
          {
            src: `/images/walk/walkrend2.png`,
            sizes: `2746x1893`,
            type: `image/png`,
          },
          {
            src: `/images/walk/walkrend3.png`,
            sizes: `547x1847`,
            type: `image/png`,
          },
          {
            src: `/images/walk/walkrend4.png`,
            sizes: `1805x1623`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};
