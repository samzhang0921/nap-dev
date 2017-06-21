import React from 'react';
import style from './ColorFilter.css';

const ColorFilter = props => {
  return (
    <div className={style.ColorFilter}>
    <h4>COLOR</h4>
    <a className={style.clearFilter} href="?">Clear</a>
    <ul>
      <li data-colour-id="1001" className="not-selected">
        <span className={style.filterCheckbox}></span>
        <span className={style.colorName}>Animal print</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="2" className="not-selected">
        <span className={style.filterCheckbox}></span>
        <span className={style.colorName}>Black</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="3" className="not-selected">
        <span className={style.filterCheckbox}></span>
        <span className={style.colorName}>Blue</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="6" className="not-selected">
        <span className={style.filterCheckbox}></span>
        <span className={style.colorName}>Brown</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="7" className="not-selected">
        <span className={style.filterCheckbox}></span>
        <span className={style.colorName}>Burgundy</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="17" className="not-selected">
          <span className={style.filterCheckbox}></span>
          <span className={style.colorName}>Gold</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="18" className="not-selected">
        <span className={style.filterCheckbox}></span>
        <span className={style.colorName}>Gray</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="19" className="not-selected">
          <span className={style.filterCheckbox}></span>
          <span className={style.colorName}>Green</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="104" className="not-selected">
        <span className={style.filterCheckbox}></span>
        <span className={style.colorName}>Metallic</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="1002" className="not-selected">
        <span className={style.filterCheckbox}></span>
        <span className={style.colorName}>Neutrals</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="31" className="not-selected">
          <span className={style.filterCheckbox}></span>
          <span className={style.colorName}>Orange</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="33" className="not-selected">
        <span className={style.filterCheckbox}></span>
        <span className={style.colorName}>Pink</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="36" className="not-selected">
        <span className={style.filterCheckbox}></span>
        <span className={style.colorName}>Purple</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="37" className="not-selected">
        <span className={style.filterCheckbox}></span>
        <span className={style.colorName}>Red</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="69" className="not-selected">
        <span className={style.filterCheckbox}></span>
        <span className={style.colorName}>Silver</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="43" className="not-selected">
        <span className={style.filterCheckbox}></span>
        <span className={style.colorName}>White</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="44" className="not-selected">
        <span className={style.filterCheckbox}></span>
        <span className={style.colorName}>Yellow</span>
        <div className="clear"></div>
      </li>
    </ul>
    </div>
  )
}

export default ColorFilter;
