import React from "react";
import './header.css'
import { MdSearch } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
function Header(){
    return(
        <>
        <div className="flower">
            <img  className="logo" src="flower.jpg" height={50} width={50}></img>
            <div className="anchor">
            <a href="www.home.com">Home</a>
            <a href="www.shop.com">Shop</a>
            <a href="www.aboutus.com">About Us</a>
            <a href="www.f&q.com">f&Q</a>
            <a href="www.concern.com">Concern</a>
            </div>
            <MdSearch />
            <MdOutlineShoppingBag />
        </div>
        </>
    )
}
export default Header