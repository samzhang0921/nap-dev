import React from 'react';
import {render} from 'react-dom';
import style from './Designer.css';
import PropTypes from 'prop-types';

class Designer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectBox:false
    };
    this.getDesigner = this.getDesigner.bind(this);
  }

  componentWillUpdate(nextProps, nextState){
    if (this.props.clearClicked !== nextProps.clearClicked){
      this.setState({
        selectBox:false
      })
    }
  }

  getDesigner (designer) {
    const { selectBox } = this.state;
    this.setState({
      selectBox: !selectBox
    });
    this.props.updateDesignerList(designer);
  }

  render() {
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
};

Designer.propTypes = {
  designerName :PropTypes.string,
  designerId :PropTypes.number,
  updateDesignerList :PropTypes.func,
  clearClicked :PropTypes.bool
};

export default Designer;
