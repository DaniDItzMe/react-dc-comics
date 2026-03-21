import Comics from "./Comics"
import MainNavBar from "./MainNavBar"
export default function Main(){
    return (
        <main>
            <div className="main-top-bg">

            </div>
            <div className="main-content">
                
                <div className="container">
                    <span className="float-label">CURRENT SERIES</span>
                    <Comics></Comics>
                </div>
                
            </div>
            <MainNavBar/>
        </main>
    )
}