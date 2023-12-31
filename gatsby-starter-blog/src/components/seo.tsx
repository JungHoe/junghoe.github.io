/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

interface SeoProps {
  description?: string;
  title: string;
  children?: any;
}

const Seo: React.FC<SeoProps> = ({ description, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author {
              name
            }
            description
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const { name } = site.siteMetadata.author;
  const defaultTitle = `${name} ${site.siteMetadata?.title}`;

  return (
    <>
      <title>{`${title} | ${defaultTitle}`}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {children}
    </>
  );
};

export default Seo;
