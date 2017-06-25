import React from 'react';
import style from './MainBlock.css';
import SideFilter from '../SideFilter/SideFilter';
import ProductsList from '../ProductsList/ProductsList';

const MainBlock = props => {
  return (
    <div className={style.MainBlock}>
    <SideFilter
    designerList = {props.data.designers}
    colorList = {props.data.colors}
    updateCategory = {props.updateCategory}
    updateDesignerList = {props.updateDesignerList}
    updateColorList = {props.updateColorList}
    categoryRefresh = {props.categoryRefresh}
    />
    <ProductsList
    productViewChecked={props.productViewChecked}
    data={props.data}
    />
    <div className={style.clear}></div>
    </div>
  );
}
export default MainBlock;
