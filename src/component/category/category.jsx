import { Stack } from '@mui/system'
import React from 'react';
import {catrgry } from '../../constants/index';
import { colors } from '../../constants/color';

const Category = ({setSelectCategoryHadler , selectCategory}) => {
  return (
    <Stack direction={'row'} sx={{overflow:'scroll'}}>
       {catrgry.map(item => (
        <button key={item.name} className='categry-btn'  
        style={{borderRadius:'0', background: item.name === selectCategory  && colors.secondary ,
        color:item.name === selectCategory && '#fff',}} onClick={()=> setSelectCategoryHadler(item.name)}>
          <span style={{color:item.name === selectCategory ? '#fff' :colors.secondary ,marginRight:'15px'}}>{item.icon}</span>
          <span style={{opacity:'1'}}>{item.name}</span>
        </button>
       ))}
    </Stack>
  )
}

export default Category