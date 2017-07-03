import React from 'react';
import {render} from 'react-dom';
import style from './CategoryFilter.css';
import Category from '../Category/Category';

export default class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);

  // the test haven't provide the categoryList data ,  that's whay I add here
    this.state = {
      categoryList: [
        {
          id: 0,
          name: 'Clothing'
        }, {
          id: 40,
          name: 'Beachwear'
        }, {
          id: 48,
          name: 'Coat'
        }, {
          id: 46,
          name: 'Dress'
        }, {
          id: 44,
          name: 'Jackets'
        }, {
          id: 55,
          name: 'Jeans'
        }, {
          id: 42,
          name: 'Pants'
        }, {
          id: 39,
          name: 'Top'
        }, {
          id: 49,
          name: 'Wrap'
        }
      ]

    }
  }
  render() {
    return (
      <div className={style.CatFilterList}>
        {this.state.categoryList.map((cat) => {
          return <Category key={cat.id} Category={cat} updateCategory = {this.props.updateCategory}/>
        })}
      </div>
    )
  }

}
