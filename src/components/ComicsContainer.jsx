import ComicsCard from "./ComicsCard";
export default function ComicsContainer (props){

    const {comics} = props;
    return (
        <div className="comics-container">
            {
                comics.map(comic => (
                    <ComicsCard id={comic.id} thumb={comic.thumb} series={comic.series}></ComicsCard>
                ))
            }
        </div>
        
    )

}