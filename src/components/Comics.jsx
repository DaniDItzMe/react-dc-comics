import comics from "../comics"
export default function Comics (){

    return (
        <div className="comics-container">
            {comics.map(comic => (
                <div className="comics-card" key={comic.id}>
                    <img src={comic.thumb} alt={comic.series} className="comics-image"/>
                    <span>{comic.series}</span>
                </div>
            ))}
        </div>
    )

}