import React from "react";
import picture from "../images/purpleHeart.png"

function PostedImage(){
    return (
        <>
        <div className="imageContainer">
            <img src={picture} alt="post picture" />
        </div>
        </>
    )
}

export default PostedImage