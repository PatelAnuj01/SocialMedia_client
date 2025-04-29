import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Comment from "../../img/comment.png";
import ShareModal from "../ShareModal/ShareModal";
import { Link } from "react-router-dom";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcon">
        <Link to="../home">
          <img src={Home} alt="" />
        </Link>
        <img src={Comment} alt="" />
      </div>
      <div className="about-section">
        <h3 align="center">About Sociofy</h3>
        <p>
          Welcome to Sociofy : your new favorite social space on the internet!
          Sociofy is a modern social media platform where you can connect,
          share, and express yourself freely. Whether you're into photos,
          videos, or simply want to stay in touch with your circle, Sociofy has
          you covered.
        </p>
        <h3>What You Can Do on Sociofy:</h3>
        <ul>
          <li>
            Sign Up or Log In Easily : Create an account in seconds or log back
            in to continue the vibe.
          </li>
          <li>
            Edit Your Profile : Personalize your profile to reflect who you are.
          </li>
          <li>
            Share Photos & Videos : Post your moments and let your followers see
            the real you.
          </li>
          <li>
            Follow & Unfollow : Build your own community by following people who
            inspire you.
          </li>
          <li>Like & Comment : Show love on posts and start conversations.</li>
        </ul>
      </div>

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>

      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
