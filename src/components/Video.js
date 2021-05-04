import React, {useRef, useState} from "react";
import "./styles/Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = () => {
    // be default video is going not to be playing
    const [play, setPlay] = useState(false)
    // defining the reference, we attach the video ref to the video
    const videoRef = useRef(null);

    const onVideoPress = () => {
        // if video is playing, so we pause the video
        if(play) {
            // if the video is playing we set the video to stop, and sen the state, to false, that video is not playing anymore
            videoRef.current.pause();
            setPlay(false);
        } else {
            // we get the current video reference and just play
            videoRef.current.play();
            // and set the state to true, because the video is playing
            setPlay(true);
        }

    }

    return (
        <div className="video">

            {/*<video onClick={onVideoPress} loop ref={videoRef}>*/}
            {/*    <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type='video/mp4' />*/}
            {/*</video>*/}

            <iframe onClick={onVideoPress} ref={videoRef} width="560" height="800" src="https://www.youtube.com/embed/AIWgvL7tLfI"
    title="YouTube video player" frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/>

            <VideoFooter channel="rookasrudzianskas" description="check out this dance" song="Shake it Off!"/>

            <VideoSidebar />
            {/*    video footer     */}
        {/*     video sidebar   */}
        </div>
    )
}

export default Video;