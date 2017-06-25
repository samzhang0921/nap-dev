import React from 'react';
import style from './header.css';
import ListViewAndSort from './ListViewAndSort/ListViewAndSort';
import ListTitleAndTotal from './ListTitleAndTotal/ListTitleAndTotal';
import ListPagination from './ListPagination/ListPagination';
const Header = props => {

    return (
      <div className={style.headerContainer}>
        <ListViewAndSort totalPage={props.totalPage} currentPage={props.currentPage} changeProductsView = {props.changeProductsView} updateSort={props.updateSort}/>
        <ListTitleAndTotal total={props.total}/>
        <ListPagination totalPage={props.totalPage} currentPage={props.currentPage} updateOffset={props.updateOffset}/>
      </div>
    );
  }


export default Header;
