import React from "react";
import "./styles/VideoFooter.css";

const VideoFooter = () => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@rookasrudzianskas</h3>
                <p>this is a  description</p>
            </div>

            <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt=""/>
        </div>
    )
}

export default VideoFooter;