import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Typography, Stack, IconButton, Tooltip, Divider } from '@mui/material'
import { CheckCircle, ThumbUpAltOutlined, ShareOutlined, MoreHoriz } from '@mui/icons-material';
import { Videos } from "./index"
import { fetchFromApi } from "../utils/fetchFromApi";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id])

  if (!videoDetail) return <Box className="video-page-loading">Loading video...</Box>;
  const { snippet: { title, channelId, channelTitle }, statistics = {} } = videoDetail;
  const { viewCount = 0, likeCount = 0 } = statistics;
  return (
    <Box className="video-page">
      <Stack className="video-page-layout">
        <Box className="video-main">
          <Box className="player-frame">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player" controls
            />
          </Box>
          <Box className="video-info">
            <Typography className="video-detail-title" variant="h5" fontWeight="bold">
              {title}
            </Typography>
            <Stack className="video-detail-meta" direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between">
              <Stack direction="row" alignItems="center" gap={1.5}>
                <Box className="detail-channel-avatar">{channelTitle?.charAt(0) || 'R'}</Box>
                <Link to={`/channel/${channelId}`}>
                  <Typography className="detail-channel-name">
                    {channelTitle}
                    <CheckCircle sx={{ fontSize: '13px', color: '#aaa', ml: '5px' }} />
                  </Typography>
                  <Typography className="detail-subs">Reactube creator</Typography>
                </Link>
                <button className="subscribe-button">Subscribe</button>
              </Stack>
              <Stack className="video-actions" direction="row" alignItems="center">
                <Tooltip title="Like">
                  <IconButton><ThumbUpAltOutlined /><span>{Number(likeCount).toLocaleString()}</span></IconButton>
                </Tooltip>
                <Tooltip title="Share">
                  <IconButton><ShareOutlined /><span>Share</span></IconButton>
                </Tooltip>
                <Tooltip title="More">
                  <IconButton><MoreHoriz /></IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack className="video-stats" direction="row" gap={1}>
              <Typography>{Number(viewCount).toLocaleString()} views</Typography>
              <Typography>•</Typography>
              <Typography>Published recently</Typography>
            </Stack>
            <Divider className="video-divider" />
            <Typography className="video-description">
              Enjoy this video from {channelTitle}. Subscribe for more videos and updates.
            </Typography>
          </Box>
        </Box>
        <Box className="related-videos">
          <Typography className="related-heading">Up next</Typography>
          <Box className="related-video-list">
            <Videos videos={videos} direction="column" />
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail