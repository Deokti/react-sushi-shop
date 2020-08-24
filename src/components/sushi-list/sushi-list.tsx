import React, { useEffect } from "react";
import { withSushiShopService } from "../HOC";
import { TypeOneSushiServer, TypeSushiListProps } from "../../types";
import { connect } from "react-redux";
import SushiListItem from "../sushi-list-item";
import { filterCategorySushi } from "../../utils";
import { sushiListLoaded } from "../../actions";

import './sushi-list.scss';

const SushiList: (props: TypeSushiListProps) => JSX.Element = (props: TypeSushiListProps) => {

  useEffect(() => {
    const { sushiShopService, sushiListLoaded } = props;
    sushiShopService
      .getData()
        .then(sushiListLoaded);
  }, []);
  
  const { sushiList, currentCategory } = props;
  const currentSushiList = filterCategorySushi(sushiList, currentCategory);
  const sushiListItem = currentSushiList.map(roll => <SushiListItem
    key={roll.id} {...roll} />
  )

  return <ul className="sushi-list">{sushiListItem}</ul>
};

const mapStateToProps = ({ sushiList, currentCategory }: { sushiList: Array<TypeOneSushiServer>, currentCategory: any }) => ({ sushiList, currentCategory })
const mapDispatchToProps = { sushiListLoaded }

export default withSushiShopService()(connect(mapStateToProps, mapDispatchToProps)(SushiList));