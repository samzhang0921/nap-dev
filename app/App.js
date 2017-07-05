import React from 'react';
import {
  render
} from 'react-dom';
import { default as fetchListing } from '../actions';
import Header from './components/Header';
import MainBlock from './components/MainBlock/MainBlock';
import style from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.listingdata,
      productViewChecked: false,
      categoryRefresh: false,
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
    this.updateColorList = this.updateColorList.bind(this);
  };

  componentDidMount() {
    console.log('componentDidMount ');
    const url = 'http://127.0.0.1:3000/api/en/shop';
    fetchListing(url).then((res) => {
      this.setState({
        data: res
      });
    });
  };

  updateSort (newSort){
    this.setState({
      sort: newSort
    });
    let sort = newSort === 'sort'? '': 'sort='+newSort+'&';
    let cat = this.state.cat === 0 ? '': 'cat='+this.state.cat+'&';
    let designerList = this.state.designerList.length===0 ? '': 'brand='+this.state.designerList.toString()+'&';
    let colorList = this.state.colorList.length===0 ? '': 'color='+this.state.colorList.toString()+'&';
    let offset = this.state.offset === 0 ? '': 'offset='+this.state.offset;
    let url = "http://127.0.0.1:3000/api/en/shop?"+sort+cat+designerList+colorList+offset;
    fetchListing(url).then((res) => {
      this.setState({
        data: res
      });
    });
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
    fetchListing(url).then((res) => {
      this.setState({
        data: res,
        categoryRefresh: !this.state.categoryRefresh
      });
    });
  }

  updateDesignerList (updateDesigner){
    let updateDesignerList = [];
    if (updateDesigner===0){
      this.setState({
        designerList: []
      });
    }else {
      let index = this.state.designerList.indexOf(updateDesigner);
      if (index > -1){
        this.state.designerList.splice(index, 1);
        updateDesignerList = this.state.designerList;
        this.setState({
          designerList: updateDesignerList
        });
      }else {
        console.log("this.state.designerList",this.state.designerList);
        console.log("push",updateDesigner);
        this.state.designerList.push(updateDesigner);
        updateDesignerList = this.state.designerList;
        this.setState({
          designerList: updateDesignerList
        });
      }
    }
    let sort = this.state.sort === 'sort'? '': 'sort='+this.state.sort+'&';
    let cat = this.state.cat === 0 ? '': 'cat='+this.state.cat+'&';
    let designerList = updateDesignerList.length===0 ? '': 'brand='+updateDesignerList.toString()+'&';
    let colorList = this.state.colorList.length===0 ? '': 'color='+this.state.colorList.toString()+'&';
    let offset = this.state.offset === 0 ? '': 'offset='+this.state.offset;
    let url = "http://127.0.0.1:3000/api/en/shop?"+sort+cat+designerList+colorList+offset;
    fetchListing(url).then((res) => {
      this.setState({
        data: res
      });
    });
  }

  updateColorList (updateColor){
      let updateColorList = [];
      if (updateColor===0){
        this.setState({
          colorList: []
        });
      }else {
        let index = this.state.colorList.indexOf(updateColor);
        if (index > -1){
          this.state.colorList.splice(index, 1);
          updateColorList = this.state.colorList;
          this.setState({
            colorList: updateColorList
          });
        }else {
          console.log("this.state.colorList",this.state.colorList);
          console.log("push",updateColor);
          this.state.colorList.push(updateColor);
          updateColorList = this.state.colorList;
          this.setState({
            colorList: updateColorList
          });
        }
      }
      let sort = this.state.sort === 'sort'? '': 'sort='+this.state.sort+'&';
        let cat = this.state.cat === 0 ? '': 'cat='+this.state.cat+'&';
        let designerList = this.state.designerList.length===0 ? '': 'brand='+this.state.designerList.toString()+'&';
        let colorList = updateColorList.length===0 ? '': 'color='+updateColorList.toString()+'&';
        let offset = this.state.offset === 0 ? '': 'offset='+this.state.offset;
        let url = "http://127.0.0.1:3000/api/en/shop?"+sort+cat+designerList+colorList+offset;
        fetchListing(url).then((res) => {
          this.setState({
            data: res
          });
        });
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
    fetchListing(url).then((res) => {
      this.setState({
        data: res
      });
    });
  }

  changeProductsView (productViewChecked){
    this.setState({productViewChecked});
  }

  render() {


    if (this.state.data) {
      const { total,limit, offset } = this.state.data;
      const totalPage = Math.ceil(total / limit);
      const currentPage = parseInt(Math.floor(offset / limit)) + 1;
      return (
        < div className = {style.wraper} >
            < Header
            offset = {offset}
            limit = {limit}
            total = {total}
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
            updateColorList = {this.updateColorList}
            categoryRefresh = {this.state.categoryRefresh}
            />
        </div >
      );
    } else {
      return (
        <div>loading</div>
      );
    }

  }
}

export default App;
