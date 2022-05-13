import React, {useState} from "react";
import {FaHeart,FaComment,FaShareSquare,FaUpload} from "react-icons/fa"

function Footer(){
    const [like, setLike] = useState(0)

    const onClicked = () => {
        setLike(like + 1);
      };
    
    return(
        <>
        <div className="footer">
        
        <span className="icons"><i onClick={onClicked}><FaHeart/>{like}</i></span>
            <span className="icons"><FaComment/> 711</span>
            <span className="icons"><FaShareSquare/> 13.7K</span>
            <span className="icons">
            <FaUpload/>
            </span>

        </div>
        </>
    )
}

export default Footer