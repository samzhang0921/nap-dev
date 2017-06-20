import React from 'react';
import {render} from 'react-dom';
import style from './Designer.css';

export default class Designer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li data-designer-id={this.props.designerId} className="not-selected">
          <span className={style.filterCheckbox}></span>
          <div className={style.designer}>
            <span>{this.props.designerName}</span>
          </div>
        <div></div>
      </li>
    )
  }
}
