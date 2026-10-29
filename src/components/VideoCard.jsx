import React from 'react'
import {Link} from 'react-router-dom';
import { Typography,Card,CardContent,CardMedia,Box } from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import { demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle } from '../utils/constants';

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    <Card className="video-card">
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
            <CardMedia
            className="video-thumbnail"
             image={snippet?.thumbnails?.high?.url} alt={snippet?.title}/>
        </Link>
        <CardContent className="video-card-content">
            <Box className="video-channel-avatar">{(snippet?.channelTitle || 'R').charAt(0)}</Box>
            <Box className="video-copy">
            <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
                <Typography className="video-title" variant="subtitle1" fontWeight="bold">
                  {snippet?.title?.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
              </Link>
              <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
                <Typography className="video-meta" variant="subtitle2" >
                  {snippet?.channelTitle||demoChannelTitle}
                  <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}/>
                </Typography>
              </Link>
              <Typography className="video-meta">1.2M views · 2 days ago</Typography>
            </Box>
        </CardContent>
    </Card>
  )
}

export default VideoCard