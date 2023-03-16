import { Box } from '@mui/material';
import {Routes , Route} from 'react-router-dom'
import Main from '../main/main';
import Chanel from '../chanel/chanel';
import VideoDetail from '../video-detail/video-detail';
import { Search } from '@mui/icons-material';
import Navbar from '../navbar/navbar';

const App = () => {
  return (
   <Box>
     <Navbar />
     <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/channel' element={<Chanel />} />
        <Route path='/video' element={<VideoDetail />} />
        <Route path='/search' element={<Search />} />
     </Routes>
   </Box>
)}

export default App;