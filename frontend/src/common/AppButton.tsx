import { Button, ButtonProps } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin: 0.4 !important;
`;

function AppButton(props: ButtonProps) {
  return <StyledButton {...props} />
}

export default AppButton;