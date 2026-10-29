import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Paper,IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchBar = () =>
{
    const [searchTerm, setsearchTerm] = useState("")
    const navigate=useNavigate();

    function searching(e)
    {
        setsearchTerm(e.target.value)
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        if(searchTerm)
        {
            navigate(`/search/${searchTerm}`)
            setsearchTerm("")

        }
    }
    return (
        <Paper component="form" className="search-form" onSubmit={handleSubmit}>
            <input className="search-bar" aria-label="Search" placeholder="Search" value={searchTerm} onChange={searching}
             />
             <IconButton type="submit" className="search-button" aria-label="Submit search">
                <Search/>
             </IconButton>
        </Paper>
    )
}

export default SearchBar