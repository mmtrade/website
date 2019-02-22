import React from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.module.scss';

const Layout = ({ children, title, description }) => (
  <div className={styles.layout}>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="16x16" href="/favicon.ico" />
    </Helmet>
    {children}
  </div>
);

export default Layout;
