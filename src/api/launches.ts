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

export default function useLaunches() {
  return useQuery(['launches'],
    () => fetchLaunches());
}
