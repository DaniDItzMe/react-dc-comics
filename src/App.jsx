import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import comics from "./comics"
function App() {

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

  return (
    <>
      <Header navLinks={navLinks}></Header>
      <Main comics={comics}></Main>
      <Footer linkSections={linkSections}></Footer>
    </>
  )
}

export default App
