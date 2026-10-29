import React from 'react'
import {Stack, Typography} from '@mui/material';
import { categories } from '../utils/constants';
// const selectedCategory='New';
const Sidebar = ({selectedCategory,setselectedCategory}) => (
    <Stack className="sidebar" direction="row">
        {
        categories.map((category)=>(
            <button className="category-btn" onClick={()=>{setselectedCategory(category.name)} }
            style={{background:category.name===selectedCategory ? '#272727' : 'transparent'}} key={category.name}>
                <span className="category-icon">
                    {category.icon}
                </span>
                <span>{category.name}</span>
            </button>    
        ))
        }
        <Typography className="sidebar-footer">© 2026 Reactube</Typography>
    </Stack>
  )


export default Sidebar