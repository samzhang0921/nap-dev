import React from 'react';
import {render} from 'react-dom';

export default class Designer extends React.Component {
  constructor(props){
    super(props)

  }
  render(){
    <li>
                              <a href="&brand=${this.props.designers.id}" title={this.props.designers.name}>
                                  <span class="filter-checkbox"></span>
                                  <div class="filter-name">
                                      <span>{this.props.designers.name}</span>
                                  </div>
                              </a>
                              <div class="clear"></div>
                          </li>
  }
}
