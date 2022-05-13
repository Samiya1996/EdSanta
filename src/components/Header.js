import React from "react";
import {GoVerified} from  "react-icons/go"
import {BsChevronDown} from "react-icons/bs"

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
            <span className="downArrow"><BsChevronDown/></span>
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