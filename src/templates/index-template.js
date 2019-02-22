import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Intro from '../components/Intro';

const IndexTemplate = ({ data }) => {
  const {
    intro,
    title: siteTitle,
    subtitle: siteSubtitle
  } = data.site.siteMetadata;

  return (
    <Layout title={siteTitle} description={siteSubtitle}>
      <Intro intro={intro} />
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate {
    site {
      siteMetadata {
        title
        subtitle
        intro {
          title
          subtitle
          background
        }
      }
    }
  }
`;

export default IndexTemplate;
