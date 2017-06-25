import React from 'react';
import { render } from 'react-dom';
import style from './Product.css';
export default class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mouseOver: false
    };
    this.toggleImage = this.toggleImage.bind(this);
  }

  toggleImage() {
      let { mouseOver } = this.state;
      this.setState({
        mouseOver: !mouseOver,
      });
    }

  render() {
    const pview = this.state.mouseOver? this.props.outfit : this.props.pview;
    const outfit = this.state.mouseOver? this.props.pview : this.props.outfit;
    const finalImageUrl= this.props.productViewChecked? pview : outfit;
    return (
      <li className = {style.listItem}>
        <div onMouseEnter={this.toggleImage} onMouseLeave={this.toggleImage} className={style.productImage}>
        <a href={'/product/'+this.props.product.sku}>
        <img src={finalImageUrl}/>

        </a>
        </div>
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
