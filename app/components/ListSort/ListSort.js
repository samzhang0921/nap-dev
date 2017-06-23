import React from 'react';
import {render} from 'react-dom';
import style from './ListSort.css';

export default class ListSort extends React.Component {
    constructor(props) {
    super(props);

    this.getSort = this.getSort.bind(this);
  }

  getSort (event){
    this.props.updateSort(event.target.value)
  }

render() {
  return (
    <div className={style.sortBy}>
                <select name="sortOrder" onChange={this.getSort} >
                    <option value="sort">Sort by</option>
                    <option value="low">Price High to Low</option>
                    <option value="high">Price Low to High</option>
                </select>

        </div>
  );
}
}
