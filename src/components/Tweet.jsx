import React from 'react';
import ProfileImage from './ProfileImage';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      {/* Pass image URL and alt text as props */}
      <ProfileImage image={tweet.user.image} alt={tweet.user.name} />
      <div className="body">
        <div className="top">
          <span className="name">{tweet.user.name}</span>
          <span className="handle">@{tweet.user.handle}</span>
          <span className="timestamp">{tweet.timestamp}</span>
        </div>
        <p className="message">{tweet.message}</p>
        <div className="actions">
          <i className="fas fa-heart"></i>
          <i className="fas fa-retweet"></i>
          <i className="fas fa-reply"></i>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
