export default function FooterLinks(props){

    const {linkSections} = props;

    return(  
        <div className="footer-links-row">
            {
                linkSections.map((link, divIndex) =>(
                    <div className="footer-links-col" key={divIndex}>
                        {
                            link.sections.map((section, sectionIndex) =>(
                                <div key={sectionIndex}>
                                    <h4>{section.title}</h4>
                                    <ul>
                                        {
                                            section.links.map((singleLink, linkIndex) => (
                                                <li key={linkIndex}><a href={singleLink.url}>{singleLink.linkName}</a></li>
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