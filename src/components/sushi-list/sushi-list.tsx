import React, { useEffect } from "react";
import { withSushiShopService } from "../HOC";
import { SusiListMapStateToProps, TypeOneSushiServer } from "../../types";
import { connect } from "react-redux";
import SushiListItem from "../sushi-list-item";
import { compose, filterCategorySushi, sortingSushi } from "../../utils";
import { sushiListLoaded } from "../../actions";

import './sushi-list.scss';

const SushiList: (props: any) => JSX.Element = (props: any) => {
  const { sushiList, currentCategory, currentSorting } = props;

  useEffect(() => { props.getFetchSushiFetch() }, []);

  const currentSushiList = sortingSushi(filterCategorySushi(sushiList, currentCategory), currentSorting);

  const sushiListItem = currentSushiList.map((roll: TypeOneSushiServer) => (
    <SushiListItem key={ roll.id } { ...roll } />
  ));

  return <ul className="sushi-list">{ sushiListItem }</ul>
};

const mapStateToProps = ({ sushiList, currentCategory, currentSorting }: SusiListMapStateToProps) =>
  ({ sushiList, currentCategory, currentSorting })

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  const { sushiShopService } = ownProps;
  return {
    getFetchSushiFetch: () => {
      sushiShopService.getData()
        .then((data: Array<TypeOneSushiServer>) =>
          dispatch(sushiListLoaded(data)));
    }
  }
}

export default compose(
  withSushiShopService(),
  connect(mapStateToProps, mapDispatchToProps)
)(SushiList);
