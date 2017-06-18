import React, {Component} from 'react';
import style from './MainBlock.css';
// import SideFilter from '../SideFilter/SideFilter';
import ProductsList from '../ProductsList/ProductsList';

const MainBlock = props => {
    return (
      <div>
      <p>{props.data.total}</p>
      <ProductsList products = {props.data}/>
      </div>
    );
  }
export default MainBlock;
