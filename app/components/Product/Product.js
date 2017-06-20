import React from 'react';
import { render } from 'react-dom';
import style from './Product.css';
export default class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <li className = {style.listItem}>
        <div className={style.productImage}><a href={'/product/'+this.props.product.sku}><img src={this.props.outfit}/></a></div>
        <div className={style.productInfo}>
        <a href={'/product/'+this.props.product.sku}><span className={style.designer}>{this.props.product.brand_name}</span></a><br/>
          {this.props.product.name}
          <br/>
          <span>{this.props.product.price}</span>
          <br/>
        </div>
      </li>
    )

  }
}
