import { Checkbox, FormControl, Input, InputLabel, ListItemText, MenuItem, MenuProps, Select } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

interface AppMultiSelectProps<T> {
  value: T[];
  onChange: (value: T[]) => void;
  options: T[];
  label: string;
}

const StyledFormControl = styled(FormControl)`
  min-width: 20rem !important;
  max-width: 20rem;
  position: relative;
  margin: 0.4rem !important;
`;

const StyledSelect = styled(Select)`
  min-width: 20rem;
`;

const menuProps: Partial<MenuProps> = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: '20rem',
    },
  },
  getContentAnchorEl: () => null as any,
};

function AppMultiSelect<T>({ value, options, onChange, label }: AppMultiSelectProps<T>) {
  return <StyledFormControl>
      {label ? <InputLabel id="demo-mutiple-chip-label">{label}</InputLabel>: null }
      <StyledSelect
        labelId="demo-mutiple-chip-label"
        id="demo-mutiple-chip"
        multiple
        value={value}
        onChange={(evt) => onChange(evt.target.value as T[])}
        input={<Input id="select-multiple-chip" />}
        renderValue={(selected: any) => selected.join(', ')}
        MenuProps={menuProps}
      >
        {options.map((opt: any) => (
          <MenuItem key={opt} value={opt}>
            <Checkbox checked={value.indexOf(opt) > -1} />
            <ListItemText primary={opt} />
          </MenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
}

export default AppMultiSelect;