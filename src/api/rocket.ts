import {useQuery} from '@tanstack/react-query';
import {IRocket} from '../types/rocket';

export const fetchRocket = async (id?: string): Promise<IRocket> => {
  const res = await fetch(
    `https://api.spacexdata.com/v4/rockets/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });

  return res.json();
};

export default function useRocket(id?: string) {
  return useQuery(['rocket'],
    () => fetchRocket(id),
    {refetchOnWindowFocus: false, enabled: !!id, staleTime: 0}
  );
}
