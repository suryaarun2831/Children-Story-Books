import Favorites from './Favorites';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile_icon from '../../assets/Profile/profile.png';
import { getUsersData, updateUserData } from '../API/Api';
import { MyContext } from '../context/Context';
import Cart from './Cart';
import Info from './Info';
import './Profile.css';

const ProfilePage = () => {
    const [section,setSection]=useState('profile-section'); 
    const navigate = useNavigate();
    const { setuserRole,setLoginStatus,setLoginId} = useContext(MyContext);
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);
    const [password, setPassword] = useState('');
    const storedLoginId = localStorage.getItem('loginId');
  const [role,setRole]=useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      if (storedLoginId) {
        try {
          const res = await getUsersData();
          setUsers(res.data);
          const user = res.data.find(user => user.id === parseInt(storedLoginId));
          if (user) {
            setUsername(user.name);
            setEmail(user.email);
            setPassword(user.password);
            setRole(user.role);
          } else {
            console.log("User not found for loginId:", storedLoginId);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("User Not Found");
      }
    };

    fetchUserData();
  }, [storedLoginId]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async() => {
        if (storedLoginId) {
            try {
                const userData={
                  username,
                  email,
                  password,
                  role
                }
                await updateUserData(userData);
              } catch (error) {
                console.error('Error updating user:', error);
              }
        }
    };

    const handleLogoutClick = () => {
      setLoginStatus(false);
      setLoginId(null);
      setuserRole('');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('loginId');
      localStorage.removeItem('userRole');
  
      navigate('/');
  };

    return (
        <div className="profile-page">
            <h1 className='title'>Welcome {username}!</h1>
            <div className='profile-div'>
                <div className='profile-section'>
                      <img src={profile_icon} height={'70px'} width={'70px'}/>
                      <div className='profile-section-list'>
                          <button onClick={()=>{setSection("profile-section")}}>Information</button>
                          <button onClick={()=>{setSection("favo")}}>Favorites</button>
                          <button onClick={()=>{setSection("cart")}}>Cart</button>
                      </div>
                <button className="logout-btn" onClick={handleLogoutClick}>Logout</button>
                </div>
                <div className='profile-content'>
                      {section === 'profile-section' && <Info id={storedLoginId}/>}
                      {section === 'favo' && <Favorites/>}
                      {section === 'cart' && <Cart/>}

                </div>
            </div>
       </div>
    );
};

export default ProfilePage;
