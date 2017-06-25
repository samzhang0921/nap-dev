import React from 'react';
import DesignerFilter from '../DesignerFilter/DesignerFilter';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import ColorFilter from '../ColorFilter/ColorFilter';
import style from './SideFilter.css';

const SideFilter = props => {
  return (
    <div className={style.sideFilter}>

      <CategoryFilter updateCategory = {props.updateCategory} />

      <DesignerFilter designerList={props.designerList} updateDesignerList={props.updateDesignerList} categoryRefresh={props.categoryRefresh}/>

      <ColorFilter updateColorList = {props.updateColorList} colorList ={props.colorList} categoryRefresh={props.categoryRefresh}/>

    </div>
  )
}

export default SideFilter;
