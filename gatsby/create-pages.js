'use strict';

const path = require('path');
const _ = require('lodash');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Index page
  createPage({
    path: '/',
    component: path.resolve('./src/templates/index-template.js')
  });

  // 404 page
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.js')
  });

  // Pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  console.log(11111);
  console.log(result);

  const { edges } = result.data.allMarkdownRemark;

  _.each(edges, (edge) => {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/page-template.js'),
        context: { slug: edge.node.fields.slug }
      });
  });
};


module.exports = createPages;
