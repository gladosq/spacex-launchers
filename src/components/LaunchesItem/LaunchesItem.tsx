import s from './LaunchesItem.module.scss';
import launchPlaceholder from './../../../public/images/launch-placeholder.png';
import {Link} from 'react-router-dom';
import CorrectArrow from '../UI/Icons/CorrectArrow';
import {ILaunch} from '../../types/launches';
import dayjs from 'dayjs';
import {nanoid} from 'nanoid';
import PreloaderImage from '../UI/PreloaderImage/PrealoderImage';
import {Image} from 'antd';

interface LaunchesItemProps {
  data: ILaunch;
}

export default function LaunchesItem({data}: LaunchesItemProps) {
  const todayDateValue = dayjs(data.date_local).format('YYYY.MM.DD');

  return (
    <li className={s.item}>
      <Link className={s.itemLink} to={data.id}>
        <div className={s.imageWrapper}>
          <Image
            key={nanoid()}
            className={s.rocketImage}
            src={data.links.patch.small || launchPlaceholder}
            placeholder={<PreloaderImage height={100}/>}
            preview={false}
            alt='Launch logo'
          />
        </div>
        <div className={s.innerWrapper}>
          <h3>{data.name}</h3>
          <div className={s.successCaption}>
            <CorrectArrow/>
            <span>Успешный запуск</span>
          </div>
        </div>
        <div className={s.dateWrapper}>
          {todayDateValue}
        </div>
      </Link>
    </li>
  );
}
