export default function FooterLinks(){

    const linkSections = [
        {
            sections:[
                {
                    title: "DC COMICS",
                    links: [
                        {
                            url:"#",
                            linkName: "Characters"
                        },
                        {
                            url:"#",
                            linkName: "Comics"
                        },
                        {
                            url:"#",
                            linkName: "Movies"
                        },
                        {
                            url:"#",
                            linkName: "TV"
                        },
                        {
                            url:"#",
                            linkName: "Games"
                        },
                        {
                            url:"#",
                            linkName: "Videos"
                        },
                        {
                            url:"#",
                            linkName: "News"
                        },
                    ]
                },
                {
                    title: "SHOP",
                    links: [
                        {
                            url:"#",
                            linkName: "Shop DC "
                        },
                        {
                            url:"#",
                            linkName: "Shop DC Collectibles"
                        }
                    ]
                },
            ]
        },
        {
            sections:[
                {
                    title: "DC",
                    links: [
                        {
                            url:"#",
                            linkName: "Terms of use"
                        },
                        {
                            url:"#",
                            linkName: "Privacy policy (New)"
                        },
                        {
                            url:"#",
                            linkName: "Ad Choices"
                        },
                        {
                            url:"#",
                            linkName: "Advertising"
                        },
                        {
                            url:"#",
                            linkName: "Jobs"
                        },
                        {
                            url:"#",
                            linkName: "Subscriptions"
                        },
                        {
                            url:"#",
                            linkName: "Talent Workshops"
                        },
                        {
                            url:"#",
                            linkName: "CPSC Certificates"
                        },
                        {
                            url:"#",
                            linkName: "Ratings"
                        },
                        {
                            url:"#",
                            linkName: "Shop Help"
                        },
                        {
                            url:"#",
                            linkName: "Contact Us"
                        },
                    ]
                }
            ]
        },
        {
            sections: [
                {
                    title: "SITES",
                    links: [
                        {
                            url:"#",
                            linkName: "DC"
                        },
                        {
                            url:"#",
                            linkName: "MAD Magazine"
                        },
                        {
                            url:"#",
                            linkName: "DC Kids"
                        },
                        {
                            url:"#",
                            linkName: "DC Universe"
                        },
                        {
                            url:"#",
                            linkName: "DC Power Visa"
                        }
                    ]
                }
            ]
        }
        
    ]

    return(  
        <div className="footer-links-row">
            {
                linkSections.map((link, index) =>(
                    <div className="footer-links-col" key={index}>
                        {
                            link.sections.map(section =>(
                                <div>
                                    <h4>{section.title}</h4>
                                    <ul>
                                        {
                                            section.links.map(singleLink => (
                                                <li><a href={singleLink.url}>{singleLink.linkName}</a></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
        // <div className="footer-links-row">
        //     <div className="footer-links-col">
        //         <div>
        //             <h4>DC COMICS</h4>
        //             <ul>
        //                 <li><a href="#">Characters</a></li>
        //                 <li><a href="#">Comics</a></li>
        //                 <li><a href="#">Movies</a></li>
        //                 <li><a href="#">TV</a></li>
        //                 <li><a href="#">Games</a></li>
        //                 <li><a href="#">Videos</a></li>
        //                 <li><a href="#">News</a></li>
        //             </ul>
        //         </div>
                
        //         <div>
        //             <h4>SHOP</h4>
        //             <ul>
        //                 <li><a href="#">Shop DC</a></li>
        //                 <li><a href="#">Shop DC Collectibles</a></li>
        //             </ul>
        //         </div>  
        //     </div>
        //     <div className="footer-links-col">
        //         <div>
        //             <h4>DC</h4>
        //             <ul>
        //                 <li><a href="#">Terms of use</a></li>
        //                 <li><a href="#">Privacy policy (New)</a></li>
        //                 <li><a href="#">Ad Choices</a></li>
        //                 <li><a href="#">Advertising</a></li>
        //                 <li><a href="#">Jobs</a></li>
        //                 <li><a href="#">Subscriptions</a></li>
        //                 <li><a href="#">Talent Workshops</a></li>
        //                 <li><a href="#">CPSC Certificates</a></li>
        //                 <li><a href="#">Ratings</a></li>
        //                 <li><a href="#">Shop Help</a></li>
        //                 <li><a href="#">Contact Us</a></li>
        //             </ul>
        //         </div> 
        //     </div>
        //     <div className="footer-links-col">
        //         <div>
        //             <h4>SITES</h4>
        //             <ul>
        //                 <li><a href="#">DC</a></li>
        //                 <li><a href="#">MAD Magazine</a></li>
        //                 <li><a href="#">DC Kids</a></li>
        //                 <li><a href="#">DC Universe</a></li>
        //                 <li><a href="#">DC Power Visa</a></li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    )
}