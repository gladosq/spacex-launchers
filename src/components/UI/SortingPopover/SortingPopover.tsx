import s from './SortingPopover.module.scss';
import clsx from 'clsx';
import {useState} from 'react';
import {Popover} from 'antd';
import {POPOVER_OVERLAY_STYLES} from '../../../const/decoration';
import ArrowIcon from '../Icons/ArrowIcon';

interface SortingPopoverProps {
  onChangeSort: (value: string) => void;
}

export default function SortingPopover({onChangeSort}: SortingPopoverProps) {
  const [sortTitle, setSortTitle] = useState('По убыванию');
  const [openPopover, setOpenPopover] = useState(false);


  const changeSorting = (value: string) => {
    setSortTitle(value);
    onChangeSort(value);
    setOpenPopover(false);
  };

  const popoverContent = (
    <div className={s.popoverWrapper}>
      <button
        className={clsx({
          [s.popoverButton]: true,
          [s.popoverButtonInactive]: sortTitle === 'По убыванию'
        })}
        onClick={() => changeSorting('По убыванию')}
      >
        По убыванию
      </button>
      <button
        className={clsx({
          [s.popoverButton]: true,
          [s.popoverButtonInactive]: sortTitle === 'По возрастанию'
        })}
        onClick={() => changeSorting('По возрастанию')}
      >
        По возрастанию
      </button>
    </div>
  );

  return (
    <div className={s.sortingWrapper}>
      <Popover
        arrow={false}
        placement='bottomRight'
        content={popoverContent}
        trigger='click'
        color={'rgb(22,30,49)'}
        open={openPopover}
        onOpenChange={() => setOpenPopover(!openPopover)}
        overlayStyle={POPOVER_OVERLAY_STYLES}
        overlayInnerStyle={{borderRadius: '4px'}}
      >
        <div className={s.changeInnerWrapper}>
          <span className={s.title}>Сортировка<ArrowIcon/></span>
          <span className={s.subtitle}>{sortTitle}</span>
        </div>
      </Popover>
    </div>
  );
}
