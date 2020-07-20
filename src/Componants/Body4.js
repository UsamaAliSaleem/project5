import React from 'react'
import o from "./Pics/o.gif"
import './../App.css';
import { Roll } from 'react-reveal';
function Body4() {
    return (
        <div className="body4">
            <div className="lb4"> <img src={o}></img></div>
            <div className="rb4"> <Roll> <h2> You Have Spare Time for Yourself</h2> </Roll>  </div>
            
        </div>
    )
}

export default Body4
