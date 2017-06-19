import React from 'react';
import {render} from 'react-dom';

export default class Designer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li>
        <a href="&brand=${this.props.designerId}" title={this.props.designerName}>
          <span></span>
          <div>
            <span>{this.props.designerName}</span>
          </div>
        </a>
        <div></div>
      </li>
    )
  }
}
