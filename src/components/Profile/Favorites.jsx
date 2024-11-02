import React, { useEffect, useState } from 'react';
import { GetStories, getUsersData } from '../API/Api';
import './Favorite.css';

const Favorites = () => {
  const [favoriteStories, setFavoriteStories] = useState([]);
  const loginId = localStorage.getItem('loginId');
  const [AllStories,setAllStories]=useState([]);
  const removeFavorite=(id)=>{
    console.log(id);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUsersData();
        console.log("API Response:", res);

        if (res && res.data) {
          const user = res.data.find(user => parseInt(user.id) === parseInt(loginId));

          if (user && user.favoriteStoryIds) {
            setFavoriteStories(user.favoriteStoryIds);
          } else {
            console.log("User has no favorite stories or user not found.");
          }
        } else {
          console.error("No data returned from the API");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [loginId]);

  useEffect(()=>{
    const fetchStories = async () => {
      try {
        const res = await GetStories();
        console.log("Fetched Stories Response:", res); // Log the response
        if (res && res.data) {
          setAllStories(res.data); // Assuming 'data' contains the array of stories
        } else {
          console.error("No stories data returned from the API");
        }
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };
    fetchStories();    
  },[]);
  const filteredStories = AllStories.filter(story => 
    favoriteStories.includes(story.storyId)
  );
  return (
    <div className="favorites-container">
      <h1 className='fav-h'>Your Favorite Stories</h1>
      {filteredStories.length > 0 ? (
  <div className="favorites-list">
    {filteredStories.map(story => (
      <div key={story.storyId} className="favorite-item">
        <img className='fav-img' src={story.img} alt={story.title} width={200} height={300} />
        <h2 className='fav-title'>{story.title}</h2>
        <p className='fav-des'>{story.description}</p>
        <p className='fav-p'>Age Group: {story.age}</p>
        <button className='rem-btn' onClick={removeFavorite(story.storyId)}>Remove</button>
      </div>
    ))}
  </div>
) : (
  <p>No favorite stories found.</p>
)}

    </div>
  );
};

export default Favorites;
