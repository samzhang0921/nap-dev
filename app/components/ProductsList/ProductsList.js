import React from 'react';
import Product from '../Product/Product';

export default class ProductsList extends React.Component {
  constructor (props){
    super(props)
    console.log("products"  + props);

  }

  componentDidMount() {


        console.log("products"  + props);
  }

    render (){
      const products = this.props.products;
      return  (
        <div>
        {products.map((pid) =>{
           return <Product key={pid.sku} product={pid} outfit={pid.outfit} pview={pid.pview}/>
        })}
        </div>
      )
    }





  }
