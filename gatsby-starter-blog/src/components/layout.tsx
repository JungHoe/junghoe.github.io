import * as React from 'react';
import { Link } from 'gatsby';

interface LayoutProps {
  location: { pathname: string };
  title: string;
  children?: any;
}

const Layout: React.FC<LayoutProps> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   );
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   );
  // }

  return (
    <>
      <header className="global-header">
        <h2 className="main-heading">
          <Link to="/">메인으로</Link>
        </h2>
      </header>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>
          © Junghoe, Built with
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
