import React, { useState } from 'react';
import { updateUserData } from '../API/Api';
import './InfoEdit.css';

const InfoEdit = ({ id,username, email, password, role,onEditClick }) => {
  const [isEditing, setIsEditing] = useState(true);
  const [updatedUsername, setUpdatedUsername] = useState(username);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedPassword, setUpdatedPassword] = useState(password);
  const [showPassword, setShowPassword] = useState(false);
  const [updatedRole, setUpdatedRole] = useState(role);
  const handleSaveClick = async () => {
    const userData = {
      id,
      username: updatedUsername,
      email: updatedEmail,
      password: updatedPassword,
      role: updatedRole
    };
    try {
      await updateUserData(userData);
      onEditClick();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="info-edit">
      <h2>Edit User Info</h2>
      <div className="edit-field">
        <label>Username</label>
        <input
          type="text"
          value={updatedUsername}
          onChange={(e) => setUpdatedUsername(e.target.value)}
        />
      </div>
      <div className="edit-field">
        <label>Email</label>
        <input
          type="email"
          value={updatedEmail}
          onChange={(e) => setUpdatedEmail(e.target.value)}
        />
      </div>
      <div className="edit-field password-field">
        <label>Password</label>
        <input type={showPassword ? 'text' : 'password'} value={updatedPassword} onChange={(e) => setUpdatedPassword(e.target.value)}/>
        <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>{showPassword ? '👁️' : '🙈'}</button>
      </div>
      <div className='edit-btns'>
            <button className="save-btn" onClick={handleSaveClick}>Save</button>
            <button className="save-btn" onClick={onEditClick}>Cancel</button>
    </div>
    </div>
  );
};

export default InfoEdit;
