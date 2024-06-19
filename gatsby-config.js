module.exports = {
  siteMetadata: {
    title: 'Your Portfolio Site Title',
    description: 'Description of your portfolio site',
    author: 'Your Name',
  },
  plugins: [
    'gatsby-plugin-postcss', // Example plugin (already present)
    'gatsby-plugin-image', // Plugin for optimizing images
    'gatsby-plugin-sharp', // Provides image processing capabilities
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`, // Path to your image directory
      },
    },
    // Add more plugins as needed
  ],
};
