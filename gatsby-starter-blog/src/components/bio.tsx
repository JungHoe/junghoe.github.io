/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FaGithubSquare } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          title
          author {
            name
            summary
            ps
          }
          social {
            github
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const title = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author;
  const social = data.site.siteMetadata.social;
  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={['auto', 'png', 'webp']}
        src="../images/profile-pic.png"
        width={120}
        height={120}
        quality={95}
        alt="Profile picture"
      />
      <div>
        <h2 className="bio-title">{title}</h2>
        <p>
          Written by <strong>{author.name}</strong>
        </p>
        <p>{author.summary}</p>
        <p className="bio-ps">- {author.ps} -</p>
        <p className="bio-link">
          <a href={social.github} rel="noopener noreferrer" target="_blank">
            <FaGithubSquare />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Bio;
