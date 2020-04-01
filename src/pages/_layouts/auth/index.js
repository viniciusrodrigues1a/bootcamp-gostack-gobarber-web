import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, AuthGlobalStyles } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <AuthGlobalStyles />
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
