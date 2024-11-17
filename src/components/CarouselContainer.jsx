import Carousel from "./Carousel";



export default function () {

    // all'utilizzo importare file img nell'array slides

    const slides=[stock1,stock2,stock3,]

    return(
        <>
            <div className="carousel bg-slate-800">
                <Carousel
                slides={slides}
                />
            </div>
        </>
    )
}