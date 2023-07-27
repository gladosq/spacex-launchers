import s from './LaunchDetails.module.scss';
import launchPlaceholder from '../../../public/images/launch-placeholder.png';
import CorrectArrow from '../UI/Icons/CorrectArrow';
import {useParams} from 'react-router-dom';
import useRocket from '../../api/rocket';
import {useLaunch} from '../../api/launches';
import dayjs from 'dayjs';
import {nanoid} from 'nanoid';
import {Image} from 'antd';
import PreloaderImage from '../UI/PreloaderImage/PrealoderImage';
import SkeletonDetails from '../UI/SkeletonDetails/SkeletonDetails';

export default function LaunchDetails() {
  const launchId = useParams().id;
  const {data, isSuccess, isFetching} = useLaunch(launchId);

  const {
    data: dataRocket,
    isSuccess: isSuccessRocket,
    isFetching: isFetchingRocket
  } = useRocket(data?.rocket);

  return (
    <div className={s.wrapper}>
      {(isFetching || isFetchingRocket) && (
        <SkeletonDetails/>
      )}
      {(isSuccess && isSuccessRocket && !isFetching && !isFetchingRocket) && (
        <>
          <h1>Запуск <span>{data?.name}</span></h1>
          <div className={s.infoWrapper}>
            <Image
              key={nanoid()}
              className={s.image}
              src={data?.links.patch.small || launchPlaceholder}
              placeholder={<PreloaderImage height={100}/>}
              preview={false}
              alt='Launch logo'
            />
            <p className={s.details}>{data?.details}</p>
          </div>
          <div className={s.rocketInner}>
            <h2>Ракета <span>{dataRocket?.name}</span></h2>
            <div className={s.numbers}>
              <p>Ступени: {dataRocket?.stages}</p>
              <p>Бустеров: {dataRocket?.boosters}</p>
              <p>Первый полёт: {dayjs(dataRocket?.first_flight).format('YY.MM.DD')}</p>
            </div>
          </div>
          <div className={s.rocketGallery}>
            {dataRocket?.flickr_images && dataRocket?.flickr_images.map((item) => (
              <Image
                key={nanoid()}
                className={s.rocketImage}
                src={item || launchPlaceholder}
                placeholder={<PreloaderImage height={166}/>}
                preview={{
                  mask: <span className={s.previewText}>Просмотр</span>
                }}
              />
            ))}
          </div>
          <div className={s.additionalInfo}>
            <div className={s.successCaption}>
              <CorrectArrow/>
              <span>Успешный запуск</span>
            </div>
            <p className={s.date}>{dayjs(data?.date_local).format('YYYY.MM.DD')}</p>
          </div>
        </>
      )}
    </div>
  );
}
