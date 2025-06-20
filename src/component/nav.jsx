import React from "react";
import "./styles/nav.css";
const fName="Elvin";
const lName ="Owusu";

const Nav=()=>{
	return(
<>
<header>
<div className="navMenu">
	<p id="name">{fName}<span>{lName}</span></p>
	<p id="hire"  linkto="mailto:mindedbusines@gmail.com">hire me</p>
</div>
</header>
</>
 )
}
export default Nav;