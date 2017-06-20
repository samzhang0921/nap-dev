import React, {Component} from 'react';
import style from './ColorFilter.css';

const ColorFilter = props => {
  return (
    <div className={style.ColorFilter}>
    <h4>COLOR</h4>
    <a className={style.clearFilter} href="?">Clear</a>
    <ul>
      <li data-colour-id="1001" className="not-selected">
        <span className="filter-checkbox"></span>
        <span className="filter-name">Animal print</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="2" className="not-selected">
        <span className="filter-checkbox"></span>
        <span className="filter-name">Black</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="3" className="not-selected">
        <span className="filter-checkbox"></span>
        <span className="filter-name">Blue</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="6" className="not-selected">
        <span className="filter-checkbox"></span>
        <span className="filter-name">Brown</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="7" className="not-selected">
        <span className="filter-checkbox"></span>
        <span className="filter-name">Burgundy</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="17" className="not-selected">
          <span className="filter-checkbox"></span>
          <span className="filter-name">Gold</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="18" className="not-selected">
        <span className="filter-checkbox"></span>
        <span className="filter-name">Gray</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="19" className="not-selected">
          <span className="filter-checkbox"></span>
          <span className="filter-name">Green</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="104" className="not-selected">
        <span className="filter-checkbox"></span>
        <span className="filter-name">Metallic</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="1002" className="not-selected">
        <span className="filter-checkbox"></span>
        <span className="filter-name">Neutrals</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="31" className="not-selected">
          <span className="filter-checkbox"></span>
          <span className="filter-name">Orange</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="33" className="not-selected">
        <span className="filter-checkbox"></span>
        <span className="filter-name">Pink</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="36" className="not-selected">
        <span className="filter-checkbox"></span>
        <span className="filter-name">Purple</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="37" className="not-selected">
        <span className="filter-checkbox"></span>
        <span className="filter-name">Red</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="69" className="not-selected">
        <span className="filter-checkbox"></span>
        <span className="filter-name">Silver</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="43" className="not-selected">
        <span className="filter-checkbox"></span>
        <span className="filter-name">White</span>
        <div className="clear"></div>
      </li>

      <li data-colour-id="44" className="not-selected">
        <span className="filter-checkbox"></span>
        <span className="filter-name">Yellow</span>
        <div className="clear"></div>
      </li>
    </ul>
    </div>
  )
}

export default ColorFilter;
