import React from 'react';
import {render} from 'react-dom';
import style from './Designer.css';

export default class Designer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectBox:this.props.select
    };
    this.getDesigner = this.getDesigner.bind(this);
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    this.setState({
      selectBox:nextProps.select
    })
  }
  getDesigner (designer) {
    let { selectBox } = this.state;
    this.setState({
      selectBox: !selectBox
    });
    this.props.updateDesignerList(designer);
  }

  render() {
    console.log("111444", this.state.selectBox);
    const checkBox = this.state.selectBox? style.filterCheckedbox: style.filterCheckbox;
    return (
      <li data-designer-id={this.props.designerId} onClick={()=>this.getDesigner(this.props.designerId)}>
          <span className={checkBox}></span>
          <div className={style.designer}>
            <span>{this.props.designerName}</span>
          </div>
        <div></div>
      </li>
    )
  }
}
