import React from 'react';
import {connect} from "react-redux";

import './sorting.scss';
import {TypeOneCategoryAndSorting, TypeSortingProps} from "../../types";
import {toggleCurrentSorting, toggleSortingActivePopup} from "../../actions/actions";

const Sorting = (props: TypeSortingProps) => {
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

  return (
    <div className="sorting">
      <div className="sorting-headers" onClick={onToggleStatePopup}>
        <span className="sorting-headers__label">Сортировка по: </span>
        <span className="sorting-headers__title">{currentSorting}</span>
      </div>
      <ul className={`sorting-selector ${activePopup}`}>
        {
          sortingList.map(({id, label}: TypeOneCategoryAndSorting) => {
            const addClass = label === currentSorting ? 'sorting-selector__item--active' : '';
            return <li key={id}
                       onClick={onToggleSorting}
                       data-sorting={label}
                       className={`sorting-selector__item ${addClass}`}>{label}</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = ({sortingActivePopup, currentSorting, sortingList}: {
  sortingActivePopup: boolean,
  currentSorting: string,
  sortingList: Array<TypeOneCategoryAndSorting>
}) => {
  return {sortingActivePopup, currentSorting, sortingList};
}

const mapDispatchToProps = { toggleSortingActivePopup, toggleCurrentSorting }

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);