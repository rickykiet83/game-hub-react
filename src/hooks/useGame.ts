import APIClient from '../services/api-client';
import Game from "../entities/Game";
import { useQuery } from '@tanstack/react-query';

const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) => useQuery({
  queryKey: ['game', slug],
  queryFn: () => apiClient.get(slug),
});

export default useGame;