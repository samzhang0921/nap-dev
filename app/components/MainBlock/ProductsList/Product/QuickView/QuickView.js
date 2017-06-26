import React from 'react';
import { render } from 'react-dom';
import style from './QuickView.css';
export default class QuickView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        quickProduct:{}
    };
    this.showComponent = this.showComponent.bind(this);
  }
  showComponent() {
    this.props.showComponent();
   }
   componentDidMount() {
     console.log('componentDidMount,,quickProduct');
     const productID = this.props.id;
     const url = 'http://127.0.0.1:3000/api/product/'+productID;
     fetch(url).then(res => {
       return res.json()
     }).then(res => {
       this.setState({
         quickProduct: res

       })
 console.log(this.state.quickProduct.images.large);
     })
   };


  render() {
    return (
      <div onClick={this.showComponent} className={style.overlay}>
            <div className={style.wrap}>
              <h2>{this.state.quickProduct.designer}</h2>
              <h4>{this.state.quickProduct.name}</h4>
              <div>
              {!this.state.quickProduct.images.large?
                null :
                <img src={this.state.quickProduct.images.large} alt={this.state.quickProduct.name}/>
              }
              </div>
            </div>
       </div>
    )

  }
}
