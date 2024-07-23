import "./App.css";
import Tweet from "./components/Tweet";
import React from 'react';
import'./index.css';

const tweetsArray = [
  {
    user: {
      name: "Thoughts of Dog®",
      image:
        "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/tweet-user-photo.png",
      handle: "dog_feelings",
    },
    timestamp: "1h ago",
    message:
      "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
  },
  
];

console.log("Rendering App with tweetsArray:", tweetsArray);
function App() {
  return (
    <div className="App">
      <Tweet tweet={tweetsArray[0]} />
    </div>
  );
}

export default App;


