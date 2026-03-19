import DigitalComicsImage from "../assets/images/buy-comics-digital-comics.png"
import MerchandiseImage from "../assets/images/buy-comics-merchandise.png"
import SubscriptionImage from "../assets/images/buy-comics-subscriptions.png"
import ShopLocatorImage from "../assets/images/buy-comics-shop-locator.png"
import PowerVisaImage from "../assets/images/buy-dc-power-visa.svg"
export default function MainNavBar(){

    return(
        <div className="main-nav">
            <div className="container">
                <ul>
                    <li>
                        <div>
                            <img src={DigitalComicsImage} alt="" className="main-nav-image"/>
                        </div>
                        <div>
                            <a href="#">DIGITAL COMICS</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={MerchandiseImage} alt="" className="main-nav-image"/>
                        </div>
                        <div>
                            <a href="#">DC MERCHANDISE</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={SubscriptionImage} alt="" className="main-nav-image"/>
                        </div>
                        <div>
                            <a href="#">SUBSCRIPTION</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={ShopLocatorImage} alt="" className="main-nav-image"/>
                        </div>
                        <div>
                            <a href="#">COMIC SHOP LOCATOR</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={PowerVisaImage} alt="" className="main-nav-image"/>
                        </div>
                        <div>
                            <a href="#">DC POWER VISA</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )

}