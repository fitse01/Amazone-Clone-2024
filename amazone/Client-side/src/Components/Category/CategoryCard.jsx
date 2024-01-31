import React from 'react'
import classes from '../Category/category.module.css'

function CategoryCard({data}) {
  return (
    <div className= {classes.category}>

      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imageLink} alt="" />
        <p>shop now</p>
      </a>
    </div>
  )
}

export default CategoryCard