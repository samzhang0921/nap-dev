import React from 'react';
import style from './CategoryFilter.css';

const CategoryFilter = props => {
  return (
    <div className={style.catFilterList}>

      <div className={style.filterItem}>
        <a href="/listing?">Clothing</a>
      </div>

      <div className={style.filterItem}>
        <a href="/listing?category=40">Beachwear</a>
      </div>
      <div className={style.filterItem}>
        <a href="/listing?category=48">Coat</a>
      </div>

      <div className={style.filterItem}>
        <a href="/listing?category=46">Dress</a>
      </div>
      <div className={style.filterItem}>
        <a href="/listing?category=44">Jackets</a>
      </div>

      <div className={style.filterItem}>
        <a href="/listing?category=55">Jeans</a>
      </div>

      <div className={style.filterItem}>
        <a href="/listing?category=42">Pants</a>
      </div>
      <div className={style.filterItem}>
        <a href="/listing?category=39">Top</a>
      </div>
      <div className={style.filterItem}>
        <a href="/listing?category=49">Wrap</a>
      </div>

    </div>
  )
}

export default CategoryFilter;
