import React from 'react';
import {render} from 'react-dom';
import style from './ColorFilter.css';
import Color from '../Color/Color';
export default class ColorFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        clearClicked:false
      };
      this.clearColor = this.clearColor.bind(this);
    }

    clearColor () {
      const {clearClicked} = this.state;
      this.setState({
          clearClicked:!clearClicked
      });
      this.props.updateColorList(0);
    }
    componentWillUpdate(nextProps, nextState){
      if (this.props.categoryRefresh !== nextProps.categoryRefresh){
        this.setState({
          clearClicked:!this.state.clearClicked
        })
      }
    }
render() {
    if(!this.props.colorList) {return <div className={style.ColorFilter} >Loading</div>};
    return (
      <div className={style.ColorFilter}>
        <h4> COLOR </h4>
        <a className = {style.clearFilter} onClick={()=>this.clearColor()}>Clear</a>
        <ul>
        {this.props.colorList.map((pColor) => {
          return <Color
          key = {pColor.id}
          id = {pColor.id}
          name = {pColor.name}
          updateColorList = {this.props.updateColorList}
          categoryRefresh={this.props.categoryRefresh}
          clearClicked = {this.state.clearClicked}
          />
        })}
        </ul>
      </div>
    )
  }
}
