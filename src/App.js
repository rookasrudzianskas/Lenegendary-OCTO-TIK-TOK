import './App.css';
import Video from "./components/Video";
import React from "react";

function App() {
  return (
    <div className="app">
        {/* this is the differnt videos*/}
        <div className="app__videos">
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    </div>
  );
}

export default App;
