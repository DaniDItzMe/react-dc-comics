import DcLogoTransparent from "../assets/images/dc-logo-bg.png"
import FacebookLogo from "../assets/images/footer-facebook.png"
import PeriscopeLogo from "../assets/images/footer-periscope.png"
import PinterestLogo from "../assets/images/footer-pinterest.png"
import TwitterLogo from "../assets/images/footer-twitter.png"
import YoutubeLogo from "../assets/images/footer-youtube.png"
import FooterLinks from "./FooterLinks"
export default function Footer(){

    return(

        <footer>
            <div className="footer-links">
                <img src={DcLogoTransparent} alt="" id="dc-footer-image"/>
                <div className="container">
                    <FooterLinks/>
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