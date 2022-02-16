const path = require('path');

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

const turnPoliciesAndProceduresIntoPages = async ({ graphql, actions }) => {
  // 1. get a template for this page
  const policiesAndProceduresTemplate = path.resolve('./src/templates/PoliciesAndProcedures/index.js');
  // 2. query all pizzas
  const { data } = await graphql(`
    query PoliciesAndProceduresQuery {
      policiesAndProcedures: allSanityPoliciesAndProcedures {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. loop over each location and create a page for that location
  data.policiesAndProcedures.nodes.forEach((policiesAndProcedures) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `policies-and-procedures/${policiesAndProcedures.slug.current}`,
      component: policiesAndProceduresTemplate,
      context: {
        name: policiesAndProcedures.title,
        slug: policiesAndProcedures.slug.current,
      },
    });
  });
};

exports.createPages = async (params) => {
  const { createRedirect } = params.actions
  createRedirect({
    fromPath: `/policies-and-procedures`,
    toPath: `/policies-and-procedures/website-policy`,
  })
  // create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    // 1. Locations
    turnLocationsIntoPages(params),
    // 2. Policies and Procedures
    turnPoliciesAndProceduresIntoPages(params)
  ]);
};
