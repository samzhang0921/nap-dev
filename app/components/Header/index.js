import React, {Component} from 'react';
import style from './header.css';
import ListViewAndSort from '../ListViewAndSort/ListViewAndSort';
import ListTitleAndTotal from '../ListTitleAndTotal/ListTitleAndTotal';
import ListPagination from '../ListPagination/ListPagination';
const Header = props => {

    return (
      <div className={style.headerContainer}>
        <ListViewAndSort offset={props.offset} limit={props.limit} totalPage={props.totalPage} currentPage={props.currentPage}/>
        <ListTitleAndTotal total={props.total}/>
        <ListPagination offset={props.offset} limit={props.limit} totalPage={props.totalPage} currentPage={props.currentPage}/>
      </div>
    );
  }


export default Header;
