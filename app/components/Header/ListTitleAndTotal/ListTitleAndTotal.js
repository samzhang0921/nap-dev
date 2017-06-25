import React from 'react';
import style from './ListTitleAndTotal.css';
const ListTitleAndTotal = props => {
  return (
    <div className={style.ListTitleAndTotal}>
      <h1>what's new</h1>
      <div className={style.resultBox}>
        <div className={style.resultsBox}>
          <span>
            {props.total}&nbsp;Results
          </span></div>
      </div>
    </div>
  );
};

export default ListTitleAndTotal;
