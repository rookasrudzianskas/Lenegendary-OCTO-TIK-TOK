import React, {useRef} from "react";
import "./styles/Video.css";

const Video = () => {
    // defining the reference, we attach the video ref to the video
    const videoRef = useRef(null);

    return (
        <div className="video">


            <video loop ref={videoRef}>
                <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type='video/mp4' />
            </video>

            {/*    video footer     */}
        {/*     video sidebar   */}
        </div>
    )
}

export default Video;