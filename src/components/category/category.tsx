import React from "react";
import { connect } from "react-redux";
import { TypeCategoryProps, TypeOneCategoryAndSorting } from "../../types";

import './category.scss';
import { toggleCurrentCategory } from "../../actions";

const Category: (props: TypeCategoryProps) => JSX.Element = (props: TypeCategoryProps) => {
  const { categories, toggleCurrentCategory, currentCategory } = props;

  const onCategory = (event: React.MouseEvent<HTMLLIElement>) => {
    toggleCurrentCategory(event.currentTarget.dataset.category);
  }

  return (
    <ul className="category">
      {
        categories.map((category: TypeOneCategoryAndSorting) => {
          const { id, label, name } = category;
          const addClass = name === currentCategory ? 'category-item--active' : '';
          return <li key={ id }
                     data-category={ name }
                     onClick={ onCategory }
                     className={ `category-item ${ addClass }` }>{ label }</li>
        })
      }
    </ul>
  )
}

const mapStateToProps = ({ arrays: { categories }, currentState: { currentCategory } }: any) => ({ categories, currentCategory });
const mapDispatchToProps = { toggleCurrentCategory }

export default connect(mapStateToProps, mapDispatchToProps)(Category);