import React, { useEffect, useState } from "react";
import "./styles/nav.css";
import ThemeSwitcher from "./themeswitcher.jsx";
const fName = "Elvin";
const lName = "Owusu";

const links = [
	{ label: "About", href: "#about" },
	{ label: "Services", href: "#services" },
	{ label: "Projects", href: "#projects" },
	{ label: "Skills", href: "#skills" },
	{ label: "Contact", href: "#contact" },
];

const Nav = ({ mode, accent, onToggleMode, onAccentChange }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const onScroll = () => {
			const sections = ["home", "about", "services", "projects", "skills", "contact"];
			let current = "home";

			sections.forEach((sectionId) => {
				const element = document.getElementById(sectionId);
				if (!element) {
					return;
				}

				const top = element.offsetTop - 140;
				if (window.scrollY >= top) {
					current = sectionId;
				}
			});

			setActiveSection(current);
		};

		window.addEventListener("scroll", onScroll);
		onScroll();

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const closeMenu = () => setMenuOpen(false);

	return (
		<header className="site-header">
			<div className="navMenu">
				<a id="name" href="#home" aria-label="Go to home section">
					{fName}
					<span>{lName}</span>
				</a>

				<button
					type="button"
					className="menu-toggle"
					onClick={() => setMenuOpen((previous) => !previous)}
					aria-label="Toggle navigation menu"
					aria-expanded={menuOpen}
				>
					<span />
					<span />
					<span />
				</button>

				<nav className={`navLinks ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
					{links.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className={activeSection === item.href.slice(1) ? "active" : ""}
							onClick={closeMenu}
						>
							{item.label}
						</a>
					))}
					<ThemeSwitcher
						mode={mode}
						accent={accent}
						onToggleMode={onToggleMode}
						onAccentChange={onAccentChange}
					/>
				</nav>

				<a id="hire" href="mailto:mindedbusiness@gmail.com">
					hire me
				</a>
			</div>
		</header>
	);
};
export default Nav;
