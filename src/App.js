import './App.css';
import Video from "./components/Video";
import React, {useState, useEffect} from "react";
import db from './firebase';

function App() {
// stores the videos
    const [videos, setVideos] = useState([]);

    useEffect(() => {
    //    fire once then component loads, but never after
        db.collection("videos").onSnapshot((snapshot) =>
            // it takes the snapshot of what is in the firebase collection videos, set to the videos state, the posts id's
            // it mapsper them one more time, meaning goes per each one for one more time, and gets all the data for each one, and sets in the
            // mapping function below as the props that data, etc url, channel and so on
            setVideos(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);


    return (
    <div className="app">
        {/* this is the differnt videos*/}
        <div className="app__videos">
            {/* looping though each video in videos state, and showing thee following data*/}
            {videos.map(({ url, channel, description, likes, shares, messages, song}) => (
                <Video url={url} channel={channel} song={song} likes={likes} messages={messages} description={description} shares={shares}/>
            ))}

        </div>
    </div>
  );
}

export default App;
