import React from "react";
import { connect } from "react-redux";
import {TypeCategoryProps, TypeOneCategory} from "../../types";

import './category.scss';

const Category: (props: TypeCategoryProps) => JSX.Element = (props: TypeCategoryProps) => {
  const { category, currentCategory, toggleCurrentCategory } = props;

  const onCategory = (event: React.MouseEvent<HTMLLIElement>) => {
    toggleCurrentCategory(event.currentTarget.dataset.category)
  }

  return (
    <ul className="category">
    {
      category.map((category: TypeOneCategory) => {
         const { id, label, name } = category;
         const addClass = name === currentCategory ? 'category-item--active' : '';
         return <li key={id}
                    data-category={name}
                   onClick={onCategory}
                     className={`category-item ${addClass}`}>{label}</li>
        })
    }
    </ul>
  )
}

const mapStateToProps = ({category}: TypeCategoryProps) => ({ category })

export default connect(mapStateToProps)(Category);