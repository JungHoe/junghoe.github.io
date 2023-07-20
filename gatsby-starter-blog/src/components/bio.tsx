/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
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
        <h2 className="bio-title">
          <span className="author-name">{author.name}</span>
          {title}
        </h2>
        <p>Frontend Developer</p>
        <p>{author.summary}</p>
        <p className="bio-ps">- {author.ps} -</p>
        <p className="bio-link">
          <a href={social.github} rel="noopener noreferrer" target="_blank">
            <FaGithubSquare />
          </a>
          <Link to="/about" className="bio-about">
            About me
          </Link>
        </p>
        <h3>🛠 Skills :</h3>
        <p>
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white" />
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white" />
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white" />
          <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" />
          <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" />
          <img src="https://img.shields.io/badge/Vite-%23646CFF?style=flat-square&logo=vite&logoColor=white" />
        </p>
        <p>
          <img src="https://img.shields.io/badge/Storybook-DB7093?style=flat-square&logo=storybook&logoColor=white" />
          <img src="https://img.shields.io/badge/TestingLibrary-%23E33332?style=flat-square&logo=testing-library&logoColor=white" />
          <img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white" />
        </p>
      </div>
    </div>
  );
};

export default Bio;
