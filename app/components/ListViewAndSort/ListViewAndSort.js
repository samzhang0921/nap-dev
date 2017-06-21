import React from 'react';
import style from './ListViewAndSort.css';
import ListView from '../ListView/ListView';
const ListViewAndSort = props => {
  return (
    <div className={style.ListViewAndSort}>
      <ListView changeProductsView = {props.changeProductsView}/>
    </div>
  );
};

export default ListViewAndSort;
