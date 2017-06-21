import React from 'react';
import {render} from 'react-dom';
import style from './ListView.css';

export default class ListView extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      buttonClicked: false
    }

    this.changeListView = this.changeListView.bind(this);
  }

changeListView (buttonClicked){
  this.setState({
      buttonClicked: !buttonClicked
  })
  this.props.changeProductsView(!buttonClicked);
}

    render(){
      const buttonText = this.state.buttonClicked ? 'Outfit View' : 'Product View';
      return (
        <div >
          <button className={style.ListView} onClick = {()=> this.changeListView(this.state.buttonClicked)}>{buttonText}</button>
        </div>
      );
    }

}
