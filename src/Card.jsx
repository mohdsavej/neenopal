import React, { useState } from "react";
import "./Card.css";
import {
  FaRegHeart,
  FaRegEdit,
  FaRegTrashAlt,
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from "react-icons/fa"; // Import the icons

const Card = ({ id, name, email, phone, website, imageUrl, onDelete }) => {
  const [liked, setLiked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);
  const [newWebsite, setNewWebsite] = useState(website);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    setNewName(newName);
    setNewEmail(newEmail);
    setNewPhone(newPhone);
    setNewWebsite(newWebsite); // Update the state variable for website
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="card">
      <img src={imageUrl} alt="Avatar" style={{ width: "100%" }} />
      <div className="container">
        {isEditing ? (
          <div className="edit-form">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Name"
            />
            <div className="iinput-icon">
              <FaEnvelope className="iicon" />
              <input
                type="text"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="iinput-icon">
              <FaPhone className="iicon" />
              <input
                type="text"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                placeholder="Phone"
              />
            </div>
            <div className="iinput-icon">
              <FaGlobe className="iicon" />
              <input
                type="text"
                value={newWebsite}
                onChange={(e) => setNewWebsite(e.target.value)}
                placeholder="Website"
              />
            </div>
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div>
            <h4>
              <b>{newName}</b>
            </h4>
            <p>
              <FaEnvelope className="input-icon" /> {newEmail}
            </p>
            <p>
              <FaPhone className="input-icon" /> {newPhone}
            </p>
            <p>
              <FaGlobe className="input-icon" /> {newWebsite}
            </p>
          </div>
        )}
        <div className="card-icons">
          <FaRegHeart
            className={`icon ${liked ? "liked" : ""}`}
            onClick={handleLike}
          />
          <FaRegEdit className="icon" onClick={handleEdit} />
          <FaRegTrashAlt className="icon" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default Card;
