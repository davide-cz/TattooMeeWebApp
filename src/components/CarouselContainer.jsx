import Carousel from "./Carousel";
import stock1 from "../assets/tattoo ex-1.jpeg"
import stock2 from "../assets/tattoo ex-2.jpeg"
import stock3 from "../assets/tattoo ex-3.jpeg"



export default function () {

    // all'utilizzo importare file img nell'array slides

    const slides=[stock1,stock2,stock3,]

    return(
        <>
            <div className="carousel h-64 justify-center align-middle">
                <Carousel
                slides={slides}
                />
            </div>
        </>
    )
}