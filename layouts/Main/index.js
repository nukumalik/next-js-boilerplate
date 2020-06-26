import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import css from './style.scss';

const Main = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next Js Boilerplate</title>
        <link rel='stylesheet' href='/css/app.css' />
      </Head>

      <div className={css.main_wrapper}>{children}</div>
    </>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
