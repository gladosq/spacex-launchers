import {useQuery} from '@tanstack/react-query';
import {ILaunch} from '../types/launches';

export const fetchLaunches = async (): Promise<ILaunch[]> => {
  const res = await fetch(
    `https://api.spacexdata.com/v5/launches`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });

  return res.json();
};

export const fetchLaunch = async (id?: string): Promise<ILaunch> => {
  const res = await fetch(
    `https://api.spacexdata.com/v5/launches/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });

  return res.json();
};

export function useLaunches() {
  return useQuery(['launches'],
    () => fetchLaunches());
}

export function useLaunch(id?: string) {
  return useQuery(['launch'],
    () => fetchLaunch(id),
    {
      staleTime: 0
    });
}
