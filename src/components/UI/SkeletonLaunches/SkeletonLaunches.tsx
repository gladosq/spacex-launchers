import s from './SkeletonLaunches.module.scss';
import {Skeleton} from 'antd';

export default function SkeletonLaunches() {

  return (
    <div className={s.wrapper}>
      <div className={s.inner}>
        <Skeleton.Button className={s.skeletonButton} active={true} size='large' block/>
      </div>
      <div className={s.inner}>
        <Skeleton.Button className={s.skeletonButton} active={true} size='large' block/>
      </div>
      <div className={s.inner}>
        <Skeleton.Button className={s.skeletonButton} active={true} size='large' block/>
      </div>
      <div className={s.inner}>
        <Skeleton.Button className={s.skeletonButton} active={true} size='large' block/>
      </div>
      <div className={s.inner}>
        <Skeleton.Button className={s.skeletonButton} active={true} size='large' block/>
      </div>
      <div className={s.inner}>
        <Skeleton.Button className={s.skeletonButton} active={true} size='large' block/>
      </div>
    </div>
  );
}
