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
      data: {}
    };
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

  render() {
    const totalPage = Math.ceil(this.state.data.total / this.state.data.limit);
    const currentPage = parseInt(Math.floor(this.state.data.offset / this.state.data.limit)) + 1;
    return (
      < div className = {style.wraper} >
      < Header
      offset = {
        this.state.data.offset
      }
      limit = {
        this.state.data.limit
      }
      total = {
        this.state.data.total
      }
      totalPage = {
        totalPage
      }
      currentPage = {
        currentPage
      }
      />
      <MainBlock
      data = {
        this.state.data
      }
      />
      </div >
    );
  }
}

export default App;
