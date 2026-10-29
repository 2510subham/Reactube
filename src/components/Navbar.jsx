import React from 'react'
import { Avatar, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { Menu, NotificationsNone, VideoCall } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => (
    <Stack className="topbar" direction="row" alignItems="center">
        <Stack className="brand-group" direction="row" alignItems="center">
            <IconButton className="menu-button" aria-label="Open menu">
                <Menu />
            </IconButton>
            <Link to="/" className="brand">
                <span className="brand-mark">▶</span>
                <Typography component="span" className="brand-name">Reactube</Typography>
            </Link>
        </Stack>
        <SearchBar />
        <Stack className="topbar-actions" direction="row" alignItems="center">
            <Tooltip title="Create"><IconButton aria-label="Create video"><VideoCall /></IconButton></Tooltip>
            <Tooltip title="Notifications"><IconButton aria-label="Notifications"><NotificationsNone /></IconButton></Tooltip>
            <Avatar className="user-avatar">R</Avatar>
        </Stack>
    </Stack>
)

export default Navbar