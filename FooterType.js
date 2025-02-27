import React from "react";
import { CiHeart } from "react-icons/ci";
import { TbTrain } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import './footertype.css'
function FooterType(){
    return(
        <>
        <div className="try" style={{display:"flex"}}>
        
        <p><CiHeart />High quality flowers</p>
        
        <p><TbTrain />Express Shipping available</p>
        
        <p><IoMdTime />Same day delivery</p>
        </div>
        </>
    )
}
export default FooterType