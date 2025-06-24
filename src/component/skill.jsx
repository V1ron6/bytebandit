
import React from 'react';


import './styles/skill.css';


//imported images


import rect from '../assets/react.svg';


import css from '../assets/css3.svg';


import html from '../assets/html5.svg';


import js from '../assets/js.svg';


import python from '../assets/python.svg';


import node from '../assets/node-js.svg';


import javac from '../assets/java.svg';











const skill=()=>{





return(


	<>


	<h1 className='tit'>skills</h1>


	<div id="skillset">


		<div className='skill'>


			<img src={rect} id="icon" />


			<p id='name'>react</p>


		</div>


		<div className='skill'>


			<img src={html} id="icon" />


			<p id='name'>html</p>


		</div>


		<div className='skill'>


			<img src={js} id="icon" />


			<p id='name'>js.</p>


		</div>


		<div className='skill'>


			<img src={css} id="icon" />


			<p id='name'>css</p>


		</div>


		<div className='skill'>


			<img src={python} id="icon" />


			<p id='name'>python</p>


		</div>


		<div className='skill'>


			<img src={node} id="icon" />


			<p id='name'>nodejs</p>


		</div>


		<div className='skill'>


			<img src={javac} id="icon" />


			<p id='name'>java</p>


		</div>


		</div>


		</>








)


}


export default skill;