import React from 'react';
export default class product extends React.Component {
  constructor (props){
    super(props)
    this.state = {

    }
  }
  render () {
    return
      <div>
         <div><img src={this.props.outfit} /></div>
         <div>
         {this.props.product.name}
         <br/>
         <span>{this.props.product.price}</span>
         <br/>
         </div>
  </div>

  }
}
