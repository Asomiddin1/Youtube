import React from 'react'
import { Paper , IconButton } from '@mui/material';
import { colors } from '../../constants/color';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
   <Paper component={'form'} sx={{border:`1px solid ${colors.secondary} ` ,
    pl:2 , boxShadow:'none'}}>
    <input type="text" placeholder='Serach...' className='searchBar' />
    <IconButton>
        <Search />
    </IconButton>
   </Paper>
  )
}

export default SearchBar;