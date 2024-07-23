
import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} alt={tweet.user.name} />
      <div className="body">
        <div className="top">

          <User name={tweet.user.name} handle={tweet.user.handle} />

          <Timestamp time={tweet.timestamp} />
        </div>
        <Message message>{tweet.message}</>
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
