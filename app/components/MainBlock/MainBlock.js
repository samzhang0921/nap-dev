import React, {Component} from 'react';
import style from './MainBlock.css';
import SideFilter from '../SideFilter/SideFilter';
import ProductsList from '../ProductsList/ProductsList';

const MainBlock = props => {
    return (
      <div>
      <SideFilter designerList = {props.data.designers}/>
      <ProductsList data = {props.data}/>
      </div>
    );
  }
export default MainBlock;
