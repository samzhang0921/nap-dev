import React from 'react';
import {render} from 'react-dom';
import style from './ListView.css';

export default class ListView extends React.Component {
  constructor(props){
    super(props)

    this.changeListView = this.changeListView.bind(this);
  }

changeListView (newView){
  this.props.changeProductsView(newView)
}

    render(){

      return (
        <div className={style.ListView}>
          <button>Product View</button>
        </div>
      );
    }

}
