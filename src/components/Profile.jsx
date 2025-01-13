/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { fetchUserProfile, updateUserProfile } from '../redux/actions/authActions';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await fetchUserProfile();
      setUsername(response.data.username);
      setEmail(response.data.email);
    };
    getUserProfile();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateUserProfile({ username, email });
    // Provide feedback to the user
  };

  return (
    <form onSubmit={handleUpdate} className="p-4">
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default Profile;