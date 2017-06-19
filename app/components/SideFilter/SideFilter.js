import React, {Component} from 'react';
import DesignerFilter from '../DesignerFilter/DesignerFilter';
import style from './SideFilter.css'

const SideFilter = props => {
  return (

    <div className={style.sideFilter}>

    <DesignerFilter designerList = {props.designerList}/>

    </div>
  // <CategoryFilter />
  // <ColorFilter />
)
}

export default SideFilter;
