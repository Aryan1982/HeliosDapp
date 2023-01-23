import "./footer.css"
import SVITlogo from './social_mediaIcns/svitlogo.png'
import instagram from './social_mediaIcns/instagram.png'
import linkedin from './social_mediaIcns/linkedin.png'
import youtube from './social_mediaIcns/youtube.png'
import facebook from './social_mediaIcns/facebook.png'
import pin from './social_mediaIcns/pin.png'

const Footer = () => {
		return(
				<div className="FooterDiv">
					<div className='leftSection'>
					<div className="locationdiv">
					{/*<img src={pin} className="pin"/><h3>Sardar Vallabhbhai Institute of Technology</h3>*/}
					</div>
					</div>
					<div className="MidSection">
					<img src={SVITlogo} alt="svitlogo" className="SVITlogo"/>
						<div className="Social_Media_icons_div">
							<img src={instagram} className="logo"/>
							<img src={facebook} className="logo"/>
							<img src={linkedin} className="logo"/>
							<img src={youtube} className="logo"/>
						</div>
					</div>
					<div className='rightSection'>
					<div className="locationdiv">
					<img src={pin} className="pin"/><a href="https://goo.gl/maps/intnaubK9nBXKv5E9" className="link"><h3>Sardar Vallabhbhai Institute of Technology Vasad</h3></a>
					</div>
					</div>
				</div>
			);
}

export default Footer;