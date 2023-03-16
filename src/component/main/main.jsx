import React, { useState } from 'react';
import { Stack ,Box, Container } from '@mui/system';
import { Typography } from '@mui/material';
import { colors} from '../../constants/color'
import Category from '../category/category';
import Videos from '../videos/videos';

const Main = () => {

  const [ selectCategory , setSelectCategory] = useState('New');
 console.log(process.env.REACT_API_PUBLIC_KEY);
 const setSelectCategoryHadler = (category)=> setSelectCategory(category);

  return (
    <Stack>
       <Category setSelectCategoryHadler={setSelectCategoryHadler} selectCategory={selectCategory}  />
      <Box p={2}  sx={{height:'90vh' }} >
         <Container>
          <Typography variant='h4' fontWeight={'bold'} mb={2}>
            {selectCategory} <span style={{color:colors.secondary}}>videos</span>
          </Typography>
             <Videos />
         </Container>
      </Box>
    </Stack>
    
  )
}

export default Main;