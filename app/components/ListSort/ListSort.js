import React from 'react';
import {render} from 'react-dom';
import style from './ListSort.css';

export default class ListSort extends React.Component {
    constructor(props) {
    super(props)
  }

render() {
  return (
    <div className={style.sortBy}>
                <select name="sortOrder">
                    <option value="0">Sort by</option>
                    <option value="high">Price High to Low</option>
                    <option value="low">Price Low to High</option>
                </select>

        </div>
  );
}
}
