import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";


export default function ({slides}) {

    const [currentSlide, setCurrentSlide] = useState(0);

    
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const titleClass = (index) =>{
    switch(index){
        case 0:
            return 'text-amber-700';
    
        case 1:
            return 'text-slate-600';

        case 2:
            return'text-blue-600';
    }   
  };

    return (
        <>
            <div className="">
                <div className=" ">
                    <div className="relative flex carousel-container  ">
                        {slides.map((slide,i)=>{
                            return (
                                <figure key={`${slide} ${i}`} 
                                    className={`${currentSlide === i ? '' : 'hidden' }  animate-fade`}>
                                        <img className={`${slide? '':'animate-pulse '} photo hover:opacity-70 hover:scale-105 transition `} src={slide} alt="" />
                                        <div className="didascalia bg-slate-400 bg-opacity-90 animate-pulse rounded-md">
                                            <h1 className={` font-bold text-lg ${titleClass(i)} text-lg p-2 text-center`} >Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                                            <p className={` font-bold text-lg ${titleClass(i)} text-sm p-2 text-center `} >
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt cupiditate minus quidem aut recusandae maiores?
                                            </p>
                                        </div>
                                    </figure>
                            )
                        })}

                    <button className="prev-succ-btn absolute left-10 top-1/2"
                        onClick={()=>{
                            prevSlide()
                        }}
                        >
                    <BsChevronLeft />
                    </button>
                    <button className="prev-succ-btn absolute right-10 top-1/2"
                        onClick={()=>{
                            nextSlide()
                        }}
                    >
                        <BsChevronRight  />
                    </button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}