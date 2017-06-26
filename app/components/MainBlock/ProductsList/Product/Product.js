import React from 'react';
import { render } from 'react-dom';
import style from './Product.css';
import QuickView from './QuickView/QuickView'
export default class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mouseOver: false,
      showComponent: false
    };
    this.toggleImage = this.toggleImage.bind(this);
    this.showComponent = this.showComponent.bind(this);
  }
  showComponent() {
     this.setState({
       showComponent: !this.state.showComponent
     });
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
        <img src={finalImageUrl}/>
            <div className={style.quickView} onClick={this.showComponent}>Quick View</div>
            {this.state.showComponent ?
          <QuickView  showComponent={this.showComponent} id={this.props.product.sku}/> :
          null
       }
        </div>
        <div className={style.productInfo}>
        <span data-product-id = {this.props.product.sku} className={style.designer}>{this.props.product.brand_name}</span><br/>
          {this.props.product.name}
          <br/>
          <span>{this.props.product.price}</span>
          <br/>
        </div>
      </li>
    )

  }
}
