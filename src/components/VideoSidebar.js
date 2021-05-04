import React, {useState} from "react";
import "./styles/VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

const VideoSidebar = () => {
    // state to track if video is liked
    const [liked, setLiked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                    <FavoriteIcon onClick={e => setLiked(false)} />
                ) : (
                    <FavoriteBorderIcon onClick={e => setLiked(true)}/>
                )}

                <p>{liked ? 300 + 1 : 300}</p>
            </div>

            <div className="videoSidebar__button">
                <MessageIcon fontSize="large" />
                <p>342</p>
            </div>

            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>123</p>
            </div>

        </div>
    )
}

export default VideoSidebar;