import React,{useContext} from 'react'
import {DataContext} from "../DataProvider/DataProvider"

const useData = () => useContext(DataContext)

export default useData