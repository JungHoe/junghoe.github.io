import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Header from './styles';
import { LocationInterface } from '@/types';

const GlobalHeader: React.FC<LocationInterface> = ({ location }) => {
  console.debug('🤔 ~ file: index.tsx:10 ~ GlobalHeader ~ props:', location);
  const {
    site: {
      siteMetadata: {
        author: { name },
      },
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `);
  return (
    <Header className="global-header">
      <h4 className="main-heading">
        <Link to="/">
          <StaticImage
            className="dev-icon"
            layout="fixed"
            formats={['auto', 'png', 'webp']}
            src="../../images/dev-icon.png"
            width={30}
            height={30}
            quality={95}
            alt="Profile picture"
          />
          <span className="author-name">{name}</span>
        </Link>
      </h4>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <Link to="/category">Category</Link> */}
          <a>Category</a>
        </li>
      </ul>
      <div>
        {/*
        TODO ::// search 테마 switch 추가
         */}
      </div>
    </Header>
  );
};

export default GlobalHeader;
