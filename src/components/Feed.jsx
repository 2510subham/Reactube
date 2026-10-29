import React from 'react'
import {useState,useEffect} from 'react';
import {Box,Stack,Typography} from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos';
import { fetchFromApi } from '../utils/fetchFromApi';

//we are making the sidebar here and shows video from the API
const Feed = () => {

const [selectedCategory, setselectedCategory] = useState('New');//it shows the video name in which we clicked
const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data)=>{setVideos(data.items)})
    },[selectedCategory])

return (
    <Stack className="page-layout landing-layout">
      <Box className="sidebar-container category-bar-container">
          <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>
      </Box>
      <Box className="content-area landing-content">
        <Stack className="feed-heading" direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h5" fontWeight="700">{selectedCategory}</Typography>
          <Typography className="feed-count">Recommended for you</Typography>
        </Stack>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )

}
export default Feed