import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';

const Chanel = () => {
  const params = useParams()
  console.log(params)
  
  return (
    <Link to='/'>
      <Button>Homefd</Button>
    </Link>
  )
}

export default Chanel;