export default function FooterLinks(props){

    const {linkSections} = props;

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
       
    )
}