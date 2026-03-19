import DcLogoTransparent from "../assets/images/dc-logo-bg.png"
import FacebookLogo from "../assets/images/footer-facebook.png"
import PeriscopeLogo from "../assets/images/footer-periscope.png"
import PinterestLogo from "../assets/images/footer-pinterest.png"
import TwitterLogo from "../assets/images/footer-twitter.png"
import YoutubeLogo from "../assets/images/footer-youtube.png"
export default function Footer(){

    return(

        <footer>
            <div className="footer-links">
                <img src={DcLogoTransparent} alt="" id="dc-footer-image"/>
                <div className="container">
                    <div className="footer-links-row">
                        <div className="footer-links-col">
                            <div>
                                <h4>DC COMICS</h4>
                                <ul>
                                    <li><a href="#">Characters</a></li>
                                    <li><a href="#">Comics</a></li>
                                    <li><a href="#">Movies</a></li>
                                    <li><a href="#">TV</a></li>
                                    <li><a href="#">Games</a></li>
                                    <li><a href="#">Videos</a></li>
                                    <li><a href="#">News</a></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4>SHOP</h4>
                                <ul>
                                    <li><a href="#">Shop DC</a></li>
                                    <li><a href="#">Shop DC Collectibles</a></li>
                                </ul>
                            </div>  
                        </div>
                        <div className="footer-links-col">
                            <div>
                                <h4>DC</h4>
                                <ul>
                                    <li><a href="#">Terms of use</a></li>
                                    <li><a href="#">Privacy policy (New)</a></li>
                                    <li><a href="#">Ad Choices</a></li>
                                    <li><a href="#">Advertising</a></li>
                                    <li><a href="#">Jobs</a></li>
                                    <li><a href="#">Subscriptions</a></li>
                                    <li><a href="#">Talent Workshops</a></li>
                                    <li><a href="#">CPSC Certificates</a></li>
                                    <li><a href="#">Ratings</a></li>
                                    <li><a href="#">Shop Help</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div> 
                        </div>
                        <div className="footer-links-col">
                            <div>
                                <h4>SITES</h4>
                                <ul>
                                    <li><a href="#">DC</a></li>
                                    <li><a href="#">MAD Magazine</a></li>
                                    <li><a href="#">DC Kids</a></li>
                                    <li><a href="#">DC Universe</a></li>
                                    <li><a href="#">DC Power Visa</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-end">
                <div className="container">
                    <div>
                        <a href="#" className="button">SIGN-UP NOW!</a>
                    </div>

                    <div className="contacts">
                        <h3 id="follow-us">FOLLOW US</h3>
                        <ul>
                            <li><a href="#"><img src={FacebookLogo} alt="Facebook" /></a></li>
                            <li><a href="#"><img src={TwitterLogo} alt="Twitter" /></a></li>
                            <li><a href="#"><img src={YoutubeLogo} alt="Youtube" /></a></li>
                            <li><a href="#"><img src={PinterestLogo} alt="Pinterest " /></a></li>
                            <li><a href="#"><img src={PeriscopeLogo} alt="Periscope " /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )

}