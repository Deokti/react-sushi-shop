import React, { useCallback, useEffect } from 'react';
import { connect } from "react-redux";

import './sorting.scss';
import { TypeOneCategoryAndSorting, TypeSortingMapToProps, TypeSortingProps } from "../../types";
import { toggleCurrentSorting, toggleSortingActivePopup } from "../../actions/actions";

const Sorting = (props: TypeSortingProps) => {
  const sortingElementRef = React.createRef<HTMLDivElement>();

  const {
    sortingActivePopup,
    toggleSortingActivePopup,
    currentSorting,
    sortingList,
    toggleCurrentSorting
  } = props;

  const activePopup = sortingActivePopup ? 'sorting-selector-active' : '';
  const onToggleStatePopup = () => toggleSortingActivePopup(!sortingActivePopup);
  const onToggleSorting = (event: React.MouseEvent<HTMLLIElement>) => {
    toggleCurrentSorting(event.currentTarget.dataset.sorting)
    toggleSortingActivePopup(false);
  }

  const onClickNotSorting = useCallback((event: any) => {
    if (sortingElementRef && !event.path.includes(sortingElementRef.current)) {
      toggleSortingActivePopup(false);
    }
  }, [sortingElementRef, toggleSortingActivePopup])

  useEffect(() => {
    document.body.addEventListener('click', onClickNotSorting);
    return () => document.body.removeEventListener('click', onClickNotSorting);
  }, [toggleSortingActivePopup, onClickNotSorting]);


  return (
    <div className="sorting" ref={ sortingElementRef }>
      <div className="sorting-headers" onClick={ onToggleStatePopup }>
        <span className="sorting-headers__label">Сортировка по: </span>
        <span className="sorting-headers__title">{ currentSorting }</span>
      </div>
      <ul className={ `sorting-selector ${ activePopup }` }>
        {
          sortingList.map(({ id, label }: TypeOneCategoryAndSorting) => {
            const addClass = label === currentSorting ? 'sorting-selector__item--active' : '';
            return <li key={ id }
                       onClick={ onToggleSorting }
                       data-sorting={ label }
                       className={ `sorting-selector__item ${ addClass }` }>{ label }</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = ({ currentState: { sortingActivePopup, currentSorting }, arrays: { sortingList } }: TypeSortingMapToProps) => {
  return { sortingActivePopup, currentSorting, sortingList };
}

const mapDispatchToProps = { toggleSortingActivePopup, toggleCurrentSorting }

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);