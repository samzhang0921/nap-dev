import React from 'react';
import {render} from 'react-dom';
import style from './Color.css';

export default class Color extends React.Component {
    constructor(props){
      super(props);
      this.state = {
      selectBox:false
    };
      this.getColor = this.getColor.bind(this);
    }

getColor (newColor){
  const { selectBox } = this.state;
   this.setState({
     selectBox: !selectBox
   });
  this.props.updateColorList(newColor)
}
componentWillUpdate(nextProps, nextState){
  if (this.props.clearClicked !== nextProps.clearClicked){
    this.setState({
      selectBox:false
    })
  }
}
render(){
  const checkBox = this.state.selectBox? style.colorCheckedbox: style.colorCheckbox;
  return (
       <li data-category-id={this.props.id} onClick={()=>this.getColor(this.props.id)}>
         <span className={checkBox}></span>
         <span className={style.colorName}>{this.props.name}</span>
         <div className={style.clear}></div>
     </li>
  )
}

}
