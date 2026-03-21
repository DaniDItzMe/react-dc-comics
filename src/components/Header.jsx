export default function Header(props){

    const {navLinks} = props;
    

    return(
        <header className="container">
            <img src="dc-logo.png" alt="Header logo" className="header-logo"/>
            <ul>
                {
                    navLinks.map((link, index) => (
                        <li key={index}><a href={link.url} className={link.active ? "active" : ""}>{link.title}</a></li>
                    ))
                }
            </ul>
        </header>
    )

}
