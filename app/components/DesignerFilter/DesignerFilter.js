import React from 'react';
import { render } from 'react-dom';
import Designer from '../Designer/Designer';
export default class DesignerFilter extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {

    console.log('DesignerFilter', this.props.designerList);
    if(!this.props.desinerList) {return <div>Loading</div>};
    const designerList = this.props.designerList;
    return (
      <div>
        <ul>
          {designerList.map((designer) => {
            console.log('designer', designer)
            return <Designer key = {designer.id} designerName = {designer.name} designerId = {designer.id}/>
          })}
        </ul>
      </div>
    )
  }

}
