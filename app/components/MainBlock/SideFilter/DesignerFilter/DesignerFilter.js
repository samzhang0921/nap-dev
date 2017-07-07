import React from 'react';
import { render } from 'react-dom';
import style from './DesignerFilter.css';
import Designer from '../Designer/Designer';
import PropTypes from 'prop-types';

class DesignerFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clearClicked:false
    };
    this.clearDesigner = this.clearDesigner.bind(this);
  }

  clearDesigner () {
    const {clearClicked} = this.state;
    this.setState({
        clearClicked:!clearClicked
    });
    this.props.updateDesignerList(0);
  }
  componentWillUpdate(nextProps, nextState){
    if (this.props.categoryRefresh !== nextProps.categoryRefresh){
      this.setState({
        clearClicked:!this.state.clearClicked
      })
    }
  }

  render() {
    if(!this.props.designerList) {return <div className={style.DesignerFilter} >Loading</div>};
    const designerList = this.props.designerList;
    return (
      <div className={style.DesignerFilter}>
        <h4>Designer</h4>
        <a className={style.clearFilter} onClick={()=>this.clearDesigner()}>Clear</a>
        <ul className={style.scrollPanel}>
            {designerList.map((designer) => {
              return <Designer
              key = {designer.id}
              designerName = {designer.name.en}
              designerId = {designer.id}
              updateDesignerList = {this.props.updateDesignerList}
              clearClicked = {this.state.clearClicked} />
            })}
        </ul>
      </div>
    )
    }
};
DesignerFilter.propTypes = {
  designerList:PropTypes.array,
  updateDesignerList : PropTypes.func,
  categoryRefresh : PropTypes.bool
};
export default DesignerFilter;
