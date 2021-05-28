import { TextField, TextFieldProps } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  margin: 0.4rem !important;
`;

function AppTextField(props: TextFieldProps) {
  return <StyledTextField {...props} />;
}

export default AppTextField;