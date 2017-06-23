import React from 'react';
import {render} from 'react-dom';
import style from './Category.css';

export default class Category extends React.Component {
    constructor(props){
      super(props);
      this.getCategory = this.getCategory.bind(this);
    }

getCategory (newCategory){
  this.props.updateCategory(newCategory)
}

render(){
  return (
    <div className={style.filterItem} data-category-id={this.props.Category.id} onClick={()=>this.getCategory(this.props.Category.id)}>
       {this.props.Category.name}
     </div>
  )
}

}
