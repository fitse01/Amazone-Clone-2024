import React from 'react'
import {categoryInfos} from './categoryFullinfo'
import CatagoryCard from './CategoryCard'
import classes from'./category.module.css'

function Category() {
  return (
    <section className={classes.category_container}>
      {
        categoryInfos.map((infos)=>(
          <CatagoryCard  data = {infos}/>
        ))
      }
    </section>
  )
}

export default Category