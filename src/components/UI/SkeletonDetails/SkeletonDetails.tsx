import s from './SkeletonDetails.module.scss';
import {Skeleton} from 'antd';

export default function SkeletonDetails() {

  return (
    <>
      <div className={s.container}>
        <Skeleton.Avatar active={true} size={'large'}/>
        <Skeleton.Button className={s.skeletonButton} active={true} size='default' block/>
      </div>
      <Skeleton.Button className={s.skeletonButton} active={true} size='default' block/>
      <Skeleton.Button className={s.skeletonButton} active={true} size='default' block/>
      <Skeleton.Button className={s.skeletonButton} active={true} size='default' block/>
      <Skeleton.Button className={s.skeletonButton} active={true} size='default' block/>
    </>
  );
}
