import { Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { addFavoriteStory } from '../API/Api';
import './Stories.css';
const Stories = () => {
  const [isAdded,setisAdded]=useState(false);
  const [play,setPlay]=useState(false);
  const storyname = localStorage.getItem('storyTitle');
  const storyimg = localStorage.getItem('storyimg');
  const storyId = localStorage.getItem('$toryId');
  const storedLoginId = localStorage.getItem('loginId');
  const AddFavorite=()=>{
      addFavoriteStory(storedLoginId,storyId);
      setisAdded(true);
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setisAdded(false);
};
  return (
    <>
    <div className='story-container'>
      <Snackbar open={isAdded} autoHideDuration={6000} onClose={handleClose} 
      message="Successfully Added to Favorites!"
      action={
        <button color="inherit" onClick={handleClose}>
            Close
        </button>
      } anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}/>
      <div className='story-content'>
          <img src={storyimg} height={'400px'} width={'300px'} style={{margin:'3% 5%',borderRadius:'10px'}}/>
          <div className='story-heading'>
            <h1 className='story-title'>{storyname}</h1>
            <button className='favorite-btn' onClick={AddFavorite}>Add to Favorites⭐</button>
            <button className='audio-btn' onClick={()=>{setPlay(prev => !prev)}}>Audio ▶</button>
            <p>Theme : Adventure/Fantasy</p>
            <div className='audio-container'>
            {play && <audio controls>
              <source src="horse.ogg" type="audio/ogg"></source>
              <source src="horse.mp3" type="audio/mpeg"></source>
              Your browser does not support the audio tag.
            </audio>}
            </div>
          </div>
      </div>

        <div className='story-words'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sed minima veniam magni odio, possimus deleniti odit amet et, quas omnis cupiditate libero itaque error fuga sint praesentium facere ab!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, porro?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, unde. Voluptates ipsa consequatur omnis neque culpa quae hic et voluptate porro laborum, officiis recusandae perferendis corporis, nulla deserunt! Consequatur voluptates saepe, possimus eveniet nesciunt, doloremque nisi dolor magnam sapiente voluptas, vel sit assumenda modi veniam rem quod accusamus iusto reiciendis nobis? Libero doloribus corporis voluptas tempore, aliquam, suscipit itaque cupiditate atque ipsa dolorum illum culpa laudantium veniam, deserunt unde perspiciatis at non ipsum in rem ut asperiores fugiat. In nulla asperiores quia optio laborum debitis id accusantium. Laudantium, totam amet voluptatem ullam, maiores, nam eius inventore atque accusantium laboriosam est?
        </div>
    </div>
    </>
  );
};

export default Stories;
