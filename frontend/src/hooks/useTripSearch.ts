import axios from 'axios';
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { Trip } from '../models/trip';
import { TripFilterState } from '../trip/TripFilter';

const BASE_URL = 'http://localhost:4000';

function useTripSearch(filter: TripFilterState) {
  const buildQueryParams = useCallback(() => {
    const params = [];

    if (filter.startDate) {
      params.push(`start_date=${filter.startDate}`);
    }
    if (filter.endDate) {
      params.push(`end_date=${filter.endDate}`);
    }
    if (filter.selectedStates?.length) {
      params.push(`states=${filter.selectedStates.join(',')}`);
    }

    return params.length ? `?${params.join('&')}` : ''
  }, [filter]);

  const { data, isLoading, error } = useQuery<unknown, unknown, Trip[]>('tripSearch', {
      queryFn: () => 
        axios.get(`${BASE_URL}/trips${buildQueryParams()}`).then(axiosResponse => axiosResponse.data)
    }
  );

  return { data, isLoading, error }
}

export default useTripSearch;