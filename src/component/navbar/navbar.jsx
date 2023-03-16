import { Box, Stack } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';
import { logo } from '../../constants';
import {colors} from '../../constants/color'
import SearchBar from '../searchBar/searchBar';


const Navbar = () => {
    
  return (
    <Stack direction={'row'} 
    alignItems={'center'} 
    justifyContent={'space-between'} 
    p={2} 
    height={'10vh'}
    sx={{positions:'stick' , top: 0 ,zIndex:999 , background:colors.primary}} >
       <Link to='/'>
          <img className='logy' width={60} src={logo} alt="logo" />
       </Link>
    
         <SearchBar />  
        <Box />
    </Stack>
  )
}

export default Navbar;