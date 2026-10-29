import React from 'react'
import {Stack,Box} from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({videos,direction}) => {
  if(!videos?.length) return <div className="loading-state">Loading videos...</div>
  return (
      <Stack className={direction === 'column' ? 'video-list' : 'video-grid'} direction={direction || "row" } flexWrap="wrap">
        {
          videos.map((video,index)=>(
            <Box key={index}>
              {video.id.videoId && <VideoCard video={video}/>}   {/*//checking if we are getting the videos */}
              {video.id.channelId && <ChannelCard channelDetail={video}/>}  {/*cheking if we get tha channel name there is only one channel card in ur API and rest are videos card */} 
            </Box>
          ))
        }
      </Stack>
  )
}

export default Videos