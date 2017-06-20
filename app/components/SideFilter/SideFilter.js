import React, {Component} from 'react';
import DesignerFilter from '../DesignerFilter/DesignerFilter';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import ColorFilter from '../ColorFilter/ColorFilter';
import style from './SideFilter.css';

const SideFilter = props => {
  return (

    <div className={style.sideFilter}>

      <CategoryFilter/>

      <DesignerFilter designerList={props.designerList}/>

      <ColorFilter/>

    </div>
  )
}

export default SideFilter;
