import React from 'react';
import style from './ListViewAndSort.css';
import ListView from '../ListView/ListView';

import ListSort from '../ListSort/ListSort';
const ListViewAndSort = props => {
  return (
    <div className={style.ListViewAndSort}>
      <ListView changeProductsView = {props.changeProductsView}/>
      <ListSort updateSort={props.updateSort}/>
    </div>
  );
};

export default ListViewAndSort;
