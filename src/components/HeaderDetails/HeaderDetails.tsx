import s from './HeaderDetails.module.scss';
import Logo from '../UI/Icons/Logo';
import BackPageIcon from '../UI/Icons/BackPageIcon';
import {Link} from 'react-router-dom';

export default function HeaderDetails() {

  return (
    <div className={s.wrapper}>
      <div className={s.logoWrapper}>
        <Logo/>
      </div>
      <Link to={'/'} className={s.link}>
        <BackPageIcon/>
        <span>Вернуться на главную</span>
      </Link>
    </div>
  );
}
