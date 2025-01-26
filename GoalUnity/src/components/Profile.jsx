import React, { useState } from 'react';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Felix  Onsongo",
    email: "felixom@gmail.com",
    team: "Local Team A",
    achievements: "Top Scorer in 2023 Local League",
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    setEditMode(false);
    // Here you can add functionality to save data to a database
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      {editMode ? (
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Team:
            <input
              type="text"
              name="team"
              value={profileData.team}
              onChange={handleChange}
            />
          </label>
          <label>
            Achievements:
            <textarea
              name="achievements"
              value={profileData.achievements}
              onChange={handleChange}
            ></textarea>
          </label>
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </form>
      ) : (
        <div>
          <p><strong>Name:</strong> {profileData.name}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Team:</strong> {profileData.team}</p>
          <p><strong>Achievements:</strong> {profileData.achievements}</p>
          <button onClick={handleEditToggle}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;