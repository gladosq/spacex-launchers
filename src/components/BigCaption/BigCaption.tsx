import s from './BigCaption.module.scss';
import Logo from '../UI/Icons/Logo';

export default function BigCaption() {

  return (
    <div className={s.wrapper}>
      <h1>Успешные космические миссии</h1>
      <Logo/>
      <h2>За 2015-2019</h2>
    </div>
  );
}
