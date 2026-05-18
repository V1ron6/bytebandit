import React from "react";
import './styles/about.css';
import imgProfile from '../assets/profile.jpg.jpg';


const About = () => {
	return (
		<section className="section about" id="about">
			<p className="eyebrow">Who I Am</p>
			<h2 className="about-title">About / Bio</h2>
			<div className="about-layout">
				<div className="about-photo-wrap">
					<img className="about-photo" src={imgProfile} alt="Professional portrait of Elvin Owusu" />
				</div>
				<article className="about-card">
					<p>
						I am a cybersecurity specialist and full-stack developer focused on offensive
						security, secure web architecture, and real-world attack simulation. I actively
						train through CTFs and practical labs, and I build tools and products that
						translate security knowledge into systems people can trust.
					</p>
					<p>
						My hands-on security work includes exploitation labs across SSRF, SSTI, Docker
						escape paths, and AD attack concepts, using tools like Kali Linux, Nmap,
						Gobuster, Netcat, and John the Ripper. I prioritize real attack understanding,
						clear remediation paths, and secure-by-default engineering decisions.
					</p>
					<p>
						On the product side, I build and deploy full-stack applications with React,
						Node.js/Express, and modern cloud-backed data layers. Projects like HGBMI and
						KidneyCheck reflect my approach: practical, user-centered solutions with strong
						authentication, reliable workflows, and measurable impact.
					</p>
					<p>
						While my academic foundation is in Sociology, it strengthens how I design secure
						technology for people and communities, especially where digital trust is still
						fragile. My long-term focus is building resilient, inclusive, and secure digital
						systems as part of the African infrastructure mission.
					</p>
                                        <p>    For clients and employers, that translates directly into fewer headaches: cleaner codebases,
                                               more resilient systems,and a developer who can own a problem end-to-end without constant hand-holding.
                                               I'd be delighted to bring that combination of builder and breaker thinking to your team — and help you 
                                               ship products that are fast, functional, and actually secure    

                                       </p>
				</article>
			</div>
		</section>
	);
};

export default About;
