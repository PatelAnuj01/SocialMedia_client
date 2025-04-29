import React, { useState, useEffect } from 'react';
import './Post.css';
import Comment from '../../img/comment.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';
import { useSelector } from 'react-redux';
import { likePost, getPostById } from '../../api/PostRequest.js';

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await getPostById(data._id);
        setLiked(response.data.likes.includes(user._id));
        setLikes(response.data.likes.length);
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };
    fetchPostData();
  }, [data._id, user._id]);

  const handleLike = async () => {
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
    try {
      await likePost(data._id, user._id);
    } catch (error) {
      console.error('Error liking the post:', error);
    }
  };

  return (
    <div className="Post">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ''}
        alt=""
      />

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: 'pointer' }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
      </div>

      <span style={{ color: 'var(--gray)', fontSize: '12px' }}>
        {likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;

