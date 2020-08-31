import React from "react";
import { connect } from "react-redux";
import { TypeOneCategoryAndSorting } from "../../types";
import { toggleCurrentCategory } from "../../actions";

import './category.scss';

type TypeCategoryProps = {
  categories: Array<TypeOneCategoryAndSorting>,
  currentCategory: string,
  toggleCurrentCategory(category: string | undefined): void
};

const Category: React.FC<TypeCategoryProps> = ({categories, toggleCurrentCategory, currentCategory}: TypeCategoryProps) => {
  const onCategory = (event: React.MouseEvent<HTMLLIElement>) => {
    toggleCurrentCategory(event.currentTarget.dataset.category);
  }

  const templateCategory = categories.map(({id, label, name}: TypeOneCategoryAndSorting) => {
    const addClass = name === currentCategory ? 'category-item--active' : '';
    return (
      <li key={id}
          data-category={name}
          onClick={onCategory}
          className={`category-item ${addClass}`}>{label}
      </li>
    )
  })

  return (
    <ul className="category">
      {templateCategory}
    </ul>
  )
}

type TypeCategoryMapToProps = {
  arrays: { categories: Array<TypeOneCategoryAndSorting> }
  currentState: { currentCategory: string }
}

const mapStateToProps = ({arrays: {categories}, currentState: {currentCategory}}: TypeCategoryMapToProps) => {
  return {categories, currentCategory}
};
const mapDispatchToProps = {toggleCurrentCategory}

export default connect(mapStateToProps, mapDispatchToProps)(Category);