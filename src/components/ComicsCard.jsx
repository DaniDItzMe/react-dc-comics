export default function ComicsCard (props){

    const {id, thumb, series} = props;
    return (
        <div className="comics-card" key={id}>
            <img src={thumb} alt={series} className="comics-image"/>
            <span>{series}</span>
        </div>
        
    )

}