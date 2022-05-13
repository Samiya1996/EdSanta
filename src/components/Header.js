import React from "react";
import {GoVerified} from  "react-icons/go"
import {GrDown} from "react-icons/gr"

function Header(){
    return(
        <>
        <div>
            <span className="name">
                Samsung Mobile
            </span>
            <span className="icons"><GoVerified/></span>
            <span className="userName">@SamsungMobile</span>
            <span className="time">&#183; 3h</span>
            <span className="downArrow"><GrDown/></span>
        </div>
        <div>
        <a href="#/" className="hashtag">
          #SamsungGalaxy #BTS @BTS_twt @BTS_bighit
        </a>
        </div>
        </>
    )
}

export default Header