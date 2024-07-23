import React from 'react';
import ProfileImage from './ProfileImage';
import './Tweet.css';

function Tweet({ tweet}) {
  return (
    <div className="tweet">
      <ProfileImage src={tweet.user.image} alt={tweet.user.name} />
      <div className="body">
        <div className="top">
          <span className="name">{tweet.user.name}</span>
          <span className="handle">@{tweet.user.handle}</span>
          <span className="timestamp">{tweet.timestamp}</span>
        </div>
        <p className="message">{tweet.message}</p>
        <div className="actions">
          <i class="fas fa-heart"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-reply"></i>
        </div>
      </div>
    </div>
  );
}

export default Tweet;