import path from 'path';

const turnLocationsIntoPages = async ({ graphql, actions }) => {
  // 1. get a template for this page
  const locationTemplate = path.resolve('./src/templates/Locations/index.js');
  // 2. query all pizzas
  const { data } = await graphql(`
    query LocationsQuery {
      locations: allSanityLocation {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. loop over each location and create a page for that location
  data.locations.nodes.forEach((location) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `locations/${location.slug.current}`,
      component: locationTemplate,
      context: {
        name: location.name,
        slug: location.slug.current,
      },
    });
  });
};

export const createPages = async (params) => {
  // create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    // 1. Locations
    turnLocationsIntoPages(params),
  ]);
};
