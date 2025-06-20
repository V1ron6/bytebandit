import React from 'react';
import { useEffect,useState } from 'react';
import './styles/project.css';

const Projects=()=>{
 const [project,setProject]=useState([]);

 useEffect(()=>{
  const FetchData =async()=>{
	const url ="/projectfile.json";
	try{
  const response = await fetch(url);
	const jdata = await response.json();
	setProject(jdata);
	console.table(jdata);
	}catch(error){
		console.log(error);
	}
	};
	FetchData();
 },[]);
	


	return(
<>
  <div className="projects">

    <h1 id="title">
	    |projects
    </h1>
		<div className="project-grid">
     {project.map((project,index)=>(
				 <div key={index} className='project-card'>
				 
				 <img id="projectImage" src={project.src}/>
        <div className='content'>
					<h2 id="projectTitle">{project.name}</h2>
           <p id="projectDescri">{project.description}</p>
					 <button id='next' >show project </button>
					 </div>
				</div>    


      ))};
			</div>

   </div>
 </>
		)
	}

export default Projects;