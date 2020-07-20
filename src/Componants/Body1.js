import React from "react";
import { Zoom, Fade, Bounce } from "react-reveal";
import useWebAnimations,{backInDown} from "@wellyshen/use-web-animations";
function Body1() {


  
  const { ref , getAnimation} = useWebAnimations({...backInDown})
  return (
    <div className="body1">
    <Zoom>  <h1><br></br>Do Your Work, From Anyware</h1></Zoom>
<br></br>
<br></br>
<br></br>


  <Fade left>  <h3>
        The work-from-home job force just got a big push from <br></br>the current global
        
        coronavirus pandemic.In fact, many <br></br> kinds of work can be done just as
        effectively,<br></br>
         if not more so, from a home office.
         </h3>
         </Fade>  
    </div>
  );
}

export default Body1;
