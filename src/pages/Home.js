import React,{useState} from 'react';
import { Box } from '@mui/material';
import Exercises from '../Components/Exercises';
import SearchExercises from '../Components/SearchExercises';
import Herobanner from '../Components/HeroBanner';

const Home = () => {
  
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <Herobanner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home