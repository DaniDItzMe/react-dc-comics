export default function Header(){

    const navLinks = [
        {
            title:"CHARACTERS",
            url: "#",
            active: false
        },
        {
            title:"COMICS",
            url: "#",
            active: true
        },
        {
            title:"MOVIES",
            url: "#",
            active: false
        },
        {
            title:"TV",
            url: "#",
            active: false
        },
        {
            title:"GAMES",
            url: "#",
            active: false
        },
        {
            title:"COLLECTIBLES",
            url: "#",
            active: false
        },
        {
            title:"VIDEOS",
            url: "#",
            active: false
        },
        {
            title:"FANS",
            url: "#",
            active: false
        },
        {
            title:"NEWS",
            url: "#",
            active: false
        },
        {
            title:"SHOP",
            url: "#",
            active: false
        }
    ]

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
{/* <li><a href="#">CHARACTERS</a></li>
                <li><a href="#" className="active">COMICS</a></li>
                <li><a href="#">MOVIES</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">GAMES</a></li>
                <li><a href="#">COLLECTIBLES</a></li>
                <li><a href="#">VIDEOS</a></li>
                <li><a href="#">FANS</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">SHOP</a></li> */}