function Tweet({ tweet}) {
  return (
    <div className="tweet">
      <img src={tweet.user.image} alt={tweet.user.name} />
      <h2>{tweet.user.name}</h2>
      <p className="handle">@{tweet.user.handle}</p>
      <p className="timestamp">{tweet.timestamp}</p>
      <p>{tweet.message}</p>
      <div className="icons">
        <i className="fas fa-heart"></i>
        <i className="fas fa-retweet"></i>
        <i className="fas fa-reply"></i>
      </div>
    </div>
    
  );
}

export default Tweet;
