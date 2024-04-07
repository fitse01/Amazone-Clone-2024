import React from 'react'
import {categoryInfos} from './categoryFullinfo'
import CatagoryCard from './CatagoryCard'
import classes from'./category.module.css'

function Category() {
  return (
    <section className={classes.category_container}>
      {
        categoryInfos.map((infos)=>(
          <CatagoryCard key={infos.id}  data = {infos}/>
        ))
      }
    </section>
  )
}

export default Category