import './styles/last.css';
import whatimg from '../assets/whatsapp.svg';
import ximg from '../assets/x-twitter.svg';
import faceimg from '../assets/facebook.svg';
import linkimg from '../assets/linkedin-in.svg';
import snapimg from '../assets/github.svg';

const Last=()=>{
	return(
		<>
		<footer>
  <div className='list'>
		{/* Whatsapp */}
		<a href='https://wa.me/233595524660' target='_blank'>
		<img src={whatimg} width={20} height={20} />
		</a>

		{/* facebook */}
		<a href='https://www.facebook.com/slyowusuviron' target='_blank'>
		<img src={faceimg} width={20} height={20} />
		</a>

		{/* x */}
		<a href='https://x.com/Byteband1t_01' target='_blank'>
		<img src={ximg} width={20} height={20} />
		</a>

		{/* lindl */}
		<a href='https://www.linkedin.com/in/elvin-owusu-703abb363?' target='_blank'>
		<img src={linkimg} width={20} height={20} />
		</a>

		{/* snap */}
		<a href='https://www.github.com/V1RON6/' target='_blank'>
		<img src={snapimg} width={20} height={20} />
		</a>

	</div>
	<p id='laststraw'> ©2025  Elvin Sly Owusu. all rights reserved </p>
		</footer>
		</>
	)
}

export default Last;