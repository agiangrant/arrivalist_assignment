import { Card } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import AppButton from '../common/AppButton';
import AppDatePicker from '../common/AppDatePicker';
import AppMultiSelect from '../common/AppMultiSelect';
import { stateList } from '../constants';

export interface TripFilterState {
  selectedStates: string[];
  startDate: string | null;
  endDate: string | null;
}

export interface TripFilterProps {
  value: TripFilterState;
  onChange: (filter: Partial<TripFilterState>) => void;
  onReset: () => void;
}

const Container = styled(Card)`
  min-width: 25%;
  max-width: 25%;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1.4rem;
`;

function TripFilter({ value, onChange, onReset }: TripFilterProps) {
  const { selectedStates, startDate, endDate } = value || {};

  return <Container>
    <AppMultiSelect value={selectedStates} options={stateList} onChange={(value) => onChange({ selectedStates: value })} label='State' />
    <AppDatePicker label="Start Date" value={startDate} onChange={(evt) => onChange({ startDate: evt.target.value })} />
    <AppDatePicker label="End Date" value={endDate} onChange={(evt) => onChange({ endDate: evt.target.value })} />
    <AppButton variant="contained" color="primary" onClick={() => onReset()}>Reset Filter</AppButton>
  </Container>;
}

export default TripFilter;