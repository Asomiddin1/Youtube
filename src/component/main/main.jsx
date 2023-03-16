import React, { useState , useEffect } from 'react';
import { Stack ,Box, Container } from '@mui/system';
import { Typography } from '@mui/material';
import { colors} from '../../constants/color'
import Category from '../category/category';
import Videos from '../videos/videos';
import { ApiService } from '../../service/api.service';

const Main = () => {

  const [ selectCategory , setSelectCategory] = useState('New');
  const [videos , setVideos] = useState([])
 
 const setSelectCategoryHadler = (category)=> setSelectCategory(category);

 useEffect(() => {
  const getData = async ()=>{
    try{
      const data = await ApiService.fetching(`search?part=snippet&q=${selectCategory}`)
    setVideos(data.items)
    console.log(data.items)
    } catch (eror) {
      console.log(eror)
    }
    
  }
  getData()
  //ApiService.fetching('search').then(data => setVideos(data))
 } , [])

  return (
    <Stack>
       <Category setSelectCategoryHadler={setSelectCategoryHadler} selectCategory={selectCategory}  />
      <Box p={2}  sx={{height:'90vh' }} >
         <Container>
          <Typography variant='h4' fontWeight={'bold'} mb={2}>
            {selectCategory} <span style={{color:colors.secondary}}>videos</span>
          </Typography>
             <Videos videos={videos} />
          
         </Container>
      </Box>
    </Stack>
    
  )
}

export default Main;