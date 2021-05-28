import { TextFieldProps } from '@material-ui/core';
import React from 'react';
import AppTextField from './AppTextField';

function AppDatePicker(props: TextFieldProps) {
  return <AppTextField {...props} type="date" defaultValue={new Date()} />
}

export default AppDatePicker;