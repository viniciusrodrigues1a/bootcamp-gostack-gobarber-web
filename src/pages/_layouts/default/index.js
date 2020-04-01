import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import { Wrapper, DefaultGlobalStyles } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <DefaultGlobalStyles />
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
