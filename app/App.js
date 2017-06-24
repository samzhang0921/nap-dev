import React from 'react';
import {
  render
} from 'react-dom';
import fetch from 'isomorphic-fetch';
import Header from './components/Header';
import MainBlock from './components/MainBlock/MainBlock';
import style from './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      productViewChecked: false,
      offset: 0,
      sort: 'sort',
      cat: 0,
      designerList:[],
      colorList:[]

    };
    this.changeProductsView = this.changeProductsView.bind(this);
    this.updateOffset = this.updateOffset.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.updateSort = this.updateSort.bind(this);
    this.updateDesignerList = this.updateDesignerList.bind(this);
  };

  componentDidMount() {
    console.log('componentDidMount');
    const url = 'http://127.0.0.1:3000/api/en/shop';
    fetch(url).then(res => {
      return res.json()
    }).then(res => {
      this.setState({
        data: res
      })
    })
  };

  updateSort (newSort){
    this.setState({
      sort: newSort
    });
    console.log(newSort);
    let sort = newSort === 'sort'? '': 'sort='+newSort+'&';
    let cat = this.state.cat === 0 ? '': 'cat='+this.state.cat+'&';
    let designerList = this.state.designerList.length===0 ? '': 'brand='+this.state.designerList.toString()+'&';
    let colorList = this.state.colorList.length===0 ? '': 'color='+this.state.colorList.toString()+'&';
    let offset = this.state.offset === 0 ? '': 'offset='+this.state.offset;
    let url = "http://127.0.0.1:3000/api/en/shop?"+sort+cat+designerList+colorList+offset;
    console.log(url);
    fetch(url).then(res => {
      return res.json()
    }).then(res => {
      this.setState({
        data: res
      })
    })
  }

  updateCategory (newCategory){
    this.setState({
      sort: 'sort',
      cat: newCategory,
      offset: 0,
      designerList:[],
      colorList:[]
    });
    let cat = newCategory === 0 ? '': 'cat='+newCategory+'&';
    let url = "http://127.0.0.1:3000/api/en/shop?"+cat;
    console.log(url);
    fetch(url).then(res => {
      return res.json()
    }).then(res => {
      this.setState({
        data: res
      })
    })
  }

  updateDesignerList (updateDesigner){
    let updateDesignerList = [];

    console.log("1",updateDesignerList);
    if (updateDesigner===0){
      this.setState({
        designerList: []
      });
    }else {
      let index = this.state.designerList.indexOf(updateDesigner);
          console.log("index",index);
      if (index > -1){
        this.state.designerList.splice(index, 1);
        updateDesignerList = this.state.designerList;
        console.log("2",updateDesignerList);
        this.setState({
          designerList: updateDesignerList
        });
      }else {
        console.log("this.state.designerList",this.state.designerList);
        console.log("push",updateDesigner);
        this.state.designerList.push(updateDesigner);
        updateDesignerList = this.state.designerList;
        console.log("3",updateDesignerList);
        this.setState({
          designerList: updateDesignerList
        });
      }
    }
    console.log("4",updateDesignerList);
    let sort = this.state.sort === 'sort'? '': 'sort='+this.state.sort+'&';
    let cat = this.state.cat === 0 ? '': 'cat='+this.state.cat+'&';
    let designerList = updateDesignerList.length===0 ? '': 'brand='+updateDesignerList.toString()+'&';
    let colorList = this.state.colorList.length===0 ? '': 'color='+this.state.colorList.toString()+'&';
    let offset = this.state.offset === 0 ? '': 'offset='+this.state.offset;
    let url = "http://127.0.0.1:3000/api/en/shop?"+sort+cat+designerList+colorList+offset;
    console.log(url);
    fetch(url).then(res => {
      return res.json()
    }).then(res => {
      this.setState({
        data: res
      })
    })
  }

  updateOffset (newOffset){
    this.setState({
      offset: newOffset
    });
    let offset = newOffset === 0 ? '': 'offset='+newOffset;
    let sort = this.state.sort === 'sort'? '': 'sort='+this.state.sort+'&';
    let cat = this.state.cat === 0 ? '': 'cat='+this.state.cat+'&';
    let designerList = this.state.designerList.length===0 ? '': 'brand='+this.state.designerList.toString()+'&';
    let colorList = this.state.colorList.length===0 ? '': 'color='+this.state.colorList.toString()+'&';
    let url = "http://127.0.0.1:3000/api/en/shop?"+sort+cat+designerList+colorList+offset;
    console.log(url);
    fetch(url).then(res => {
      return res.json()
    }).then(res => {
      this.setState({
        data: res
      })
    })
  }

  changeProductsView (productViewChecked){
    this.setState({productViewChecked});
  }

  render() {
    const totalPage = Math.ceil(this.state.data.total / this.state.data.limit);
    const currentPage = parseInt(Math.floor(this.state.data.offset / this.state.data.limit)) + 1;
    return (
      < div className = {style.wraper} >
          < Header
          offset = {this.state.data.offset}
          limit = {this.state.data.limit}
          total = {this.state.data.total}
          totalPage ={totalPage}
          currentPage = {currentPage}
          changeProductsView = {this.changeProductsView}
          updateOffset = {this.updateOffset}
          updateSort = {this.updateSort}
          />
          <MainBlock
          data = {this.state.data}
          productViewChecked = {this.state.productViewChecked}
          updateCategory = {this.updateCategory}
          updateDesignerList = {this.updateDesignerList}
          />
      </div >
    );
  }
}

export default App;
