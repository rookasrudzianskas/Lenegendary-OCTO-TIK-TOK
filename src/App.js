import './App.css';
import Video from "./components/Video";
import React from "react";

function App() {
  return (
    <div className="app">
        {/* this is the differnt videos*/}
        <div className="app__videos">
            <Video url="https://www.youtube.com/embed/AIWgvL7tLfI" channel="rookasrudzianskas" description="Wow this is amazing" song="catch My disease" likes={300} shares={343} messages={23213}/>
            <Video url="https://www.youtube.com/embed/AIWgvL7tLfI" channel="rookasrudzianskas" description="Wow this is amazing" song="catch My disease" likes={300} shares={343} messages={23213}/>
            <Video url="https://www.youtube.com/embed/AIWgvL7tLfI" channel="rookasrudzianskas" description="Wow this is amazing" song="catch My disease" likes={300} shares={343} messages={23213}/>
            <Video url="https://www.youtube.com/embed/AIWgvL7tLfI" channel="rookasrudzianskas" description="Wow this is amazing" song="catch My disease" likes={300} shares={343} messages={23213}/>
            <Video url="https://www.youtube.com/embed/AIWgvL7tLfI" channel="rookasrudzianskas" description="Wow this is amazing" song="catch My disease" likes={300} shares={343} messages={23213}/>
            <Video url="https://www.youtube.com/embed/AIWgvL7tLfI" channel="rookasrudzianskas" description="Wow this is amazing" song="catch My disease" likes={300} shares={343} messages={23213}/>
            <Video url="https://www.youtube.com/embed/AIWgvL7tLfI" channel="rookasrudzianskas" description="Wow this is amazing" song="catch My disease" likes={300} shares={343} messages={23213}/>
            <Video url="https://www.youtube.com/embed/AIWgvL7tLfI" channel="rookasrudzianskas" description="Wow this is amazing" song="catch My disease" likes={300} shares={343} messages={23213}/>
        </div>
    </div>
  );
}

export default App;
