import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import './styles/project.css';

const Projects = () => {
	const [project, setProject] = useState([]);
	const [search, setSearch] = useState('');
	const [activeTag, setActiveTag] = useState('All');
	const [sortBy, setSortBy] = useState('name');

	useEffect(() => {
		const inferTags = (item) => {
			if (Array.isArray(item.tags) && item.tags.length > 0) {
				return item.tags;
			}

			const text = `${item.name} ${item.description}`.toLowerCase();
			const mappedTags = [];
			if (text.includes('react')) mappedTags.push('React');
			if (text.includes('node')) mappedTags.push('Node.js');
			if (text.includes('api')) mappedTags.push('API');
			if (text.includes('c++')) mappedTags.push('C++');
			if (text.includes('dashboard')) mappedTags.push('Dashboard');
			if (text.includes('full-featured')) mappedTags.push('Full Stack');
			if (text.includes('ai')) mappedTags.push('AI');

			return mappedTags.length > 0 ? mappedTags : ['Web'];
		};

		const fetchData = async () => {
			const url = '/projectfile.json';
			try {
				const response = await fetch(url);
				const jdata = await response.json();
				const prepared = jdata.map((item, index) => ({
					...item,
					src: String(item.src || '').trim(),
					tags: inferTags(item),
					live: typeof item.live === 'string' && item.live.trim() ? item.live.trim() : null,
					code: item.code || '#',
					order: jdata.length - index,
				}));
				setProject(prepared);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const tags = useMemo(() => {
		const allTags = project.flatMap((item) => item.tags || []);
		return ['All', ...new Set(allTags)];
	}, [project]);

	const filteredProjects = useMemo(() => {
		const filtered = project.filter((item) => {
			const matchesTag = activeTag === 'All' || (item.tags || []).includes(activeTag);
			const text = `${item.name} ${item.description}`.toLowerCase();
			const matchesSearch = text.includes(search.toLowerCase());
			return matchesTag && matchesSearch;
		});

		if (sortBy === 'latest') {
			return filtered.sort((first, second) => second.order - first.order);
		}

		return filtered.sort((first, second) => first.name.localeCompare(second.name));
	}, [project, activeTag, search, sortBy]);

	return (
		<section className="section projects" id="projects">
			<p className="eyebrow">Recent Work</p>
			<h2 className="section-title">Projects</h2>

			<div className="project-controls">
				<input
					type="search"
					value={search}
					onChange={(event) => setSearch(event.target.value)}
					placeholder="Search by project name or keyword"
					aria-label="Search projects"
				/>

				<select
					value={sortBy}
					onChange={(event) => setSortBy(event.target.value)}
					aria-label="Sort projects"
				>
					<option value="name">Sort: Name</option>
					<option value="latest">Sort: Latest Added</option>
				</select>

				<div className="filter-group" role="tablist" aria-label="Project category filters">
					{tags.map((tag) => (
						<button
							key={tag}
							type="button"
							className={activeTag === tag ? 'active' : ''}
							onClick={() => setActiveTag(tag)}
						>
							{tag}
						</button>
					))}
				</div>
			</div>

			<div className="project-grid">
				{filteredProjects.map((item, index) => (
					<article key={`${item.name}-${index}`} className="project-card">
						<img className="project-image" src={item.src.trim()} alt={`${item.name} preview`} />
						<div className="content">
							<h3 className="project-title">{item.name}</h3>
							<p className="project-description">{item.description}</p>
							<div className="pill-row">
								{(item.tags || []).map((tag) => (
									<span key={`${item.name}-${tag}`} className="pill">
										{tag}
									</span>
								))}
							</div>
							<div className="project-actions">
								{item.live ? (
									<a id="next" href={item.live} target="_blank" rel="noreferrer">
										Live Demo
									</a>
								) : null}
								<a className="ghost-link" href={item.code} target="_blank" rel="noreferrer">
									Source
								</a>
							</div>
						</div>
					</article>
				))}
			</div>

			{filteredProjects.length === 0 ? (
				<p className="empty-state">No projects matched your search. Try another keyword.</p>
			) : null}
		</section>
	);
};

export default Projects;
