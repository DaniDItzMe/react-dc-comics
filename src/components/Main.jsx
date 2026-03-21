import ComicsContainer from "./ComicsContainer"
import MainNavBar from "./MainNavBar"
export default function Main(props){

    const {comics} = props;

    return (
        <main>
            <div className="main-top-bg">

            </div>
            <div className="main-content">
                
                <div className="container">
                    <span className="float-label">CURRENT SERIES</span>
                    <ComicsContainer comics={comics}></ComicsContainer>
                </div>
                
            </div>
            <MainNavBar/>
        </main>
    )
}