import React from 'react';
import { render } from 'react-dom';
import style from './DesignerFilter.css';
import Designer from '../Designer/Designer';
export default class DesignerFilter extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    if(!this.props.designerList) {return <div className={style.DesignerFilter} >Loading</div>};
    const designerList = this.props.designerList;
    return (
      <div className={style.DesignerFilter}>
      <h4>Designer</h4>
      <a className={style.clearFilter} href="?">Clear</a>
        <ul className={style.scrollPanel}>
          {designerList.map((designer) => {
            return <Designer key = {designer.id} designerName = {designer.name.en} designerId = {designer.id}/>
          })}
        </ul>
      </div>
    )
  }

}
