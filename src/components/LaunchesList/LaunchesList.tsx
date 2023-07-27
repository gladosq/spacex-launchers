import s from './LaunchesList.module.scss';
import LaunchesItem from '../LaunchesItem/LaunchesItem';
import {useEffect, useState} from 'react';
import {ILaunch} from '../../types/launches';
import {nanoid} from 'nanoid';
import SortingPopover from '../UI/SortingPopover/SortingPopover';
import dayjs from 'dayjs';
import {MAX_FILTER_YEAR, MIN_FILTER_YEAR} from '../../const/sorting';
import {sortByAsc, sortByDesc} from '../../utils/sorting';
import {useLaunches} from '../../api/launches';
import SkeletonLaunches from '../UI/SkeletonLaunches/SkeletonLaunches';

export default function LaunchesList() {
  const [successLaunchesList, setSuccessLaunchesList] = useState<ILaunch[]>([]);
  const {data, isSuccess, isLoading} = useLaunches();

  useEffect(() => {
    if (isSuccess) {
      /*--- Фильтрация по успешным запускам и диапазону 2015-2019 ---*/
      const successLaunches = data.filter((item) => {
        if (item.success && (
          dayjs(item.date_local).get('year') >= MIN_FILTER_YEAR
          && dayjs(item.date_local).get('year') <= MAX_FILTER_YEAR)) {
          return true;
        }
      });
      /*--- Сортировка запусков по убыванию ---*/
      const sortedByAsc = successLaunches.sort(sortByAsc);
      setSuccessLaunchesList(sortedByAsc);
    }
  }, [isSuccess]);

  const changeSortingHandler = (value: string) => {
    if (value === 'По возрастанию') {
      setSuccessLaunchesList(successLaunchesList.slice().sort(sortByDesc));
    } else {
      setSuccessLaunchesList(successLaunchesList.slice().sort(sortByAsc));
    }
  };

  return (
    <div className={s.wrapper}>
      <SortingPopover onChangeSort={changeSortingHandler}/>
      {isLoading && <SkeletonLaunches/>}
      {isSuccess && (
        <div className={s.count}>
          <span>Количество запусков:</span>
          {successLaunchesList.length}
        </div>
      )}
      <ul className={s.list}>
        {isSuccess && successLaunchesList.map((e) => (
          <LaunchesItem data={e} key={nanoid()}/>
        ))}
      </ul>
    </div>
  );
}
