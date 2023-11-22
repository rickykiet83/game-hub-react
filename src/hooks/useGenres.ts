import APIClient from '../services/api-client';
import { Genre } from '../entities/Genre';
import genres from '../data/genres';
import ms from 'ms';
import { useQuery } from '@tanstack/react-query';

const apiClient = new APIClient<Genre>('/genres');
const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
  initialData: genres,
})

export default useGenres;