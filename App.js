import React from "react";
import Header from "./Webpage/Header";
import Body from "./Webpage/Body";
import Main from "./Webpage/Main";
import FooterType from "./Webpage/FooterType";
import Next from "./Webpage/Next";
import Last from "./Webpage/Last";
import LastPart from "./Webpage/LastPart";



function App() {
  return (
    <>
   <div style={{gap:"50px"}}>
    <Header/>
    <div style={{backgroundColor:"rgb(230, 213, 213)"}}>
    <div style={{display:"flex",paddingLeft:"300px"}}>
    <Body/>
    <Main/>
    </div>
    </div>
    </div>
    <FooterType/>
    <Next/>
    <div style={{display:"flex", backgroundColor:"rgb(230, 213, 213)"}}>
    <Last/>
    <LastPart/>
    </div>

    </>
  )
}
export default App
