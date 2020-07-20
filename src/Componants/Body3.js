import React from 'react'
import r from "./Pics/r.png"
import { Roll, Zoom } from "react-reveal";
function Body3() {
    return (
        <div className="body3">
           <div className="lb3"><Zoom> <p> Work Whenever You Want!</p></Zoom>   </div>
            <Roll right> <div className="rb3"> <img src={r}></img></div></Roll>
            
        </div>
    )
}

export default Body3
