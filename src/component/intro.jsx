import React from "react";
import './styles/intro.css';
import download from '../assets/download.svg';
import imgProfile from '../assets/profile.jpg.jpg';
const Intro=()=>{
	return(
	<>
	<div className="intro">
		<h1 id="fullName">Elvin Owusu</h1>
		<p id="spec">full stack developer</p>
		<div className="int">
			<p id="abt">
				passionate about creating Elegant 
				solution to complex problems
				</p>
			<button className="cvDownload">download cv <img src={download} height={12} width={12} /></button>
			<button className="contact">contact</button>
		</div>
		<div className="profile_picture">
			<img  id="profilepic" src={imgProfile}  width={250} height={250}/>
		</div>
	</div>
	</>
	)
}
export default Intro;