import React from "react";
import './styles/intro.css';
import download from '../assets/download.svg';
import imgProfile from '../assets/profile.jpg.jpg';

const cvUrl = 'https://drive.google.com/file/d/18gthJ487C1Q2qLE7d9kxVb0V7dpNpvHW/view?usp=drivesdk';

const Intro = () => {
	return (
		<section className="section intro" id="home">
			<div className="intro-copy">
				<p className="eyebrow">Portfolio 2026</p>
				<h1 id="fullName">Elvin Owusu</h1>
				<p id="spec">Cybersecurity Specialist &amp; Full-Stack Developer | Building Secure Systems for Africa&apos;s Digital Future</p>
				<p id="abt">
					I design secure, performant web products and sharpen offensive security
					skills through hands-on labs, CTFs, and self-driven learning.
				</p>

				<div className="intro-actions">
					<a className="cvDownload" href={cvUrl} target="_blank" rel="noreferrer">
						Download CV <img src={download} height={12} width={12} alt="download icon" />
					</a>
					<a className="contact" href="#contact">
						Contact
					</a>
				</div>
			</div>

			<div className="profile_picture">
				<img
					id="profilepic"
					src={imgProfile}
					width={280}
					height={280}
					alt="Portrait of Elvin Owusu"
				/>
			</div>
		</section>
	);
};
export default Intro;
