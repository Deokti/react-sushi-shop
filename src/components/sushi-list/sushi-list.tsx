import React, { useEffect } from "react";
import { withSushiShopService } from "../HOC";
import { SusiListMapStateToProps, TypeOneSushiServer } from "../../types";
import { connect } from "react-redux";
import SushiListItem from "../sushi-list-item";
import { compose, filterCategorySushi, sortingSushi } from "../../utils";
import { fetchSushi } from "../../actions";

import './sushi-list.scss';
import { sushiAddedToCart } from "../../actions/actions";

const SushiList: (props: any) => JSX.Element = (props: any) => {
  const {
    sushiList,
    currentCategory,
    currentSorting,
    onAddedToCart
  } = props;

  useEffect(() => { props.getFetchSushi() }, []);

  const currentSushiList = sortingSushi(filterCategorySushi(sushiList, currentCategory), currentSorting);
  const sushiListItem = currentSushiList.map((roll: TypeOneSushiServer) => (
    <SushiListItem
      key={ roll.id }
      { ...roll }
      onAddedToCart={() => onAddedToCart(roll.id)}/>
  ));

  return <ul className="sushi-list">{ sushiListItem }</ul>
};

const mapStateToProps = ({ sushiList, currentCategory, currentSorting }: SusiListMapStateToProps) =>
  ({ sushiList, currentCategory, currentSorting })

const mapDispatchToProps = (dispatch: any, { sushiShopService }: any) => {
  return {
    getFetchSushi: () => fetchSushi(sushiShopService, dispatch)(),
    onAddedToCart: (id: number) => dispatch(sushiAddedToCart(id))
  }
}

export default compose(
  withSushiShopService(),
  connect(mapStateToProps, mapDispatchToProps)
)(SushiList);
