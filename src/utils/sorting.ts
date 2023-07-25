import {ILaunch} from '../types/launches';

export const sortByAsc = ((first: ILaunch, second: ILaunch) => {
  return new Date(second.date_local).getTime() - new Date(first.date_local).getTime();
});

export const sortByDesc = ((first: ILaunch, second: ILaunch) => {
  return new Date(first.date_local).getTime() - new Date(second.date_local).getTime();
});
