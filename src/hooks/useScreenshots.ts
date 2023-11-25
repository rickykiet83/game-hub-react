import APIClient from '../services/api-client';
import Screenshot from '../entities/Screenshot';
import { useQuery } from '@tanstack/react-query';

export const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll
  })
};