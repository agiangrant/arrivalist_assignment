import { AppBar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  padding: 0 2rem;
  text-align: center;
`;

function Header() {
  return <StyledAppBar position="relative">
    <h2>
      Arrivalist Homework
    </h2>
  </StyledAppBar>
}

export default Header