import * as React from 'react';
import HorizonBar from './HorizonBar';
import GlobalHeader from '@/components/GlobalHeader';

interface LayoutProps {
  location: { pathname: string };
  title: string;
  children?: JSX.Element | JSX.Element[];
}

const Layout: React.FC<LayoutProps> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <>
      <GlobalHeader location={location}></GlobalHeader>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <HorizonBar />
        <footer>
          Copyright © 2023, All right reserved.
          <br />
          NOBeKo's Blog - Build with
          <a
            href="https://github.com/gatsbyjs/gatsby-starter-blog"
            className="staterLink"
          >
            gatsby-starter-blog
          </a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
