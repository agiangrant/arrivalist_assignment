import moment from 'moment';
import React, { useCallback, useEffect, useReducer } from 'react';
import { useQueryClient } from 'react-query';
import styled from 'styled-components';
import useTripSearch from '../hooks/useTripSearch';
import TripFilter, { TripFilterState } from './TripFilter';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const initialState = {
  selectedStates: [],
  startDate: moment().subtract(1, 'year').format('YYYY-MM-DD'),
  endDate: moment().format('YYYY-MM-DD'),
};

function filterReducer(state: TripFilterState, action: Partial<TripFilterState>) {
  return { ...state, ...action };
}

function TripDashboard() {
  const queryClient = useQueryClient();
  const [filter, setFilter] = useReducer(filterReducer, initialState);
  const { data } = useTripSearch(filter);

  useEffect(() => {
    queryClient.refetchQueries('tripSearch');
  }, [filter, queryClient]);

  console.log(data, filter);

  const resetFilter = useCallback(() => {
    setFilter({
      selectedStates: [],
      startDate: moment().subtract(1, 'year').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    });
  }, []);

  return <Container>
    <TripFilter value={filter} onChange={setFilter} onReset={resetFilter} />
    <Column></Column>
  </Container>
}

export default TripDashboard;