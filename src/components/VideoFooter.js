import React from "react";
import "./styles/VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

const VideoFooter = () => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@rookasrudzianskas</h3>
                <p>this is a  description</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />

                    {/* this is sliding text animation*/}
                    {/* index, is which number is going on now*/}
                    {/* smooth, then one finishes, another starts*/}
                    <Ticker mode="smooth">

                        {({ index }) => (
                            <>
                                <p>YOOO WHAT IS UPs</p>
                            </>
                        )}

                    </Ticker>
                </div>
            </div>

            <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt=""/>
        </div>
    )
}

export default VideoFooter;