import apiClient, { FetchResponse } from '../services/api-client';

import genres from '../data/genres';
import { useQuery } from '@tanstack/react-query';
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres')
    .then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000, //24 hours
  initialData: { count: genres.length, results: genres }
})

export default useGenres;