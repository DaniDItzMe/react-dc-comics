export default function ComicsCard (props){

    const {thumb, series} = props;
    return (
        <div className="comics-card">
            <img src={thumb} alt={series} className="comics-image"/>
            <span>{series}</span>
        </div>
        
    )

}