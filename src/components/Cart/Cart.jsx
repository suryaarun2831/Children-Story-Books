// import React, { useEffect, useState } from 'react';
// import { deleteStoryFromCart, getUsersData } from '../API/Api';
// import './Cart.css';

// const Cart = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const loginId = localStorage.getItem('loginId');
//       console.log('Login Id here: ' + loginId);
//       const response = await getUsersData();
//       if (response) {
//         const user = response.data.find(user => user.id.toString() === loginId);
//         setUserData(user);
//       }
//     };
//     fetchUserData();
//   }, []);

//   const handleDeleteFromCart = async (storyId) => {
//     const loginId = localStorage.getItem('loginId');
//     console.log(`Attempting to delete story with ID: ${storyId} for user with ID: ${loginId}`);
//     try {
//         await deleteStoryFromCart(loginId, storyId);
//         setUserData(prevUserData => ({
//             ...prevUserData,
//             stories: prevUserData.stories.filter(story => story.storyId !== storyId)
//         }));
//         console.log(`Story with ID: ${storyId} deleted from cart`);
//     } catch (error) {
//         console.error('Error deleting story from cart:', error);
//     }
// };


//   const handleRemove = (storyId) => {
//     console.log(`Remove story with ID: ${storyId}`);
//     handleDeleteFromCart(storyId);
//   };

//   const handleAddExtraBooks = () => {
//     console.log('Add extra books clicked');
//     // Logic to add extra books can be implemented here
//   };

//   const handleBuy = (storyId) => {
//     console.log(`Buy story with ID: ${storyId}`);
//     // Logic to handle buying the story can be implemented here
//   };

//   return (
//     <div className="cart-container">
//       <h2>User Cart</h2>
//       {userData ? (
//         <div className="cart-item">
//           <h3>{userData.username}</h3>
//           <p>Email: {userData.email}</p>
//           <p>Role: {userData.role}</p>
//           <ul>
//             {userData.stories && userData.stories.length > 0 ? (
//               userData.stories.map((story, i) => (
//                 <li key={i} className="story-item">
//                   <img src={story.img} alt={story.title} />
//                   <div className="story-details">
//                     <h4>{story.title}</h4>
//                     <p>Description: {story.description}</p>
//                     <p>Age: {story.age}</p>
//                     <div className="buttons-container">
//                       <button 
//                         className="buy-button"
//                         onClick={() => handleBuy(story.id)}
//                       >
//                         Buy
//                       </button>
//                       <button 
//                         className="remove-button"
//                         onClick={() => handleRemove(story.storyId)}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </li>
//               ))
//             ) : (
//               <p>No stories available.</p>
//             )}
//           </ul>
//           <button 
//             className="add-button"
//             onClick={handleAddExtraBooks}
//           >
//             Add Extra Books
//           </button>
//         </div>
//       ) : (
//         <p>No user data available.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;
