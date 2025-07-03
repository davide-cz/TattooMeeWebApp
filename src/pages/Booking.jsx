import axios from "axios";
import { useEffect, useState } from "react"
import SingleArtist from "../components/SingleArtist";

const { VITE_VERCEL_URI } = import.meta.env


export default function (){

  

//   ----------------chiamata per tautatori

const [artists, setArtists] = useState([]);
const [piercers, setPiercers] = useState([]);
const [pierceOrTattoo, setPierceOrTattoo] = useState('');

useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get(`${VITE_VERCEL_URI}/user/tattooer`);
        setArtists(response.data);
      } catch (error) {
        console.error('Errore nel recuperare i tatuatori', error);
      }
    };
    fetchArtists();
  }, []);

useEffect(() => {
    const fetchPiercers = async () => {
      try {
        const response = await axios.get(`${VITE_VERCEL_URI}/user/piercer`);
        setPiercers(response.data);
      } catch (error) {
        console.error('Errore nel recuperare i piercer', error);
      }
    };
    fetchPiercers();
  }, []);

// creazione form di prenotazione giorno / id tattooer / n telefono oppure email

const [appointmentData, setAppointmentData]=useState({
    email:'',
    telephone:'',
    tattooer:'',
    clientName:'',
    pierceOrTattoo:'',
    description:''
})




  const handleSelectTattooer = (tattooer)=>{
    setAppointmentData(curr=>({...curr, tattooer:tattooer}))
  }

const [counterPerForm , setCounterPerForm] =useState(0)


//  Smooth Transition per rendering 
const [isVisible, setIsVisible] = useState(false);


useEffect(() => {
  // Ritarda l'attivazione della visibilità per consentire l'animazione
  const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Ritardo opzionale per evitare "flash" iniziale
    return () =>{ clearTimeout(timer)
      setIsVisible(true);
  }; // Pulizia al dismount
}, [counterPerForm , isVisible ]);

const smoothTransition =  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10';



    return(

        <>
            <div className={`h-full w-full m-auto booking-component flex justify-center items-center py-2  `}>
            <div className="w-screen">
                {/* ---- Form 1 ----- */}
                <div className={counterPerForm===5   ? `flex justify-center` : ` booking-form ` }>
                  <div className="m-auto justify-around">{
                        counterPerForm === 0 &&
                        <div className={` m-auto h-3/4 form-item ${smoothTransition}`}>

                          <h2 >Vuoi Fare un Tatuaggio o Piercing?</h2>
                          <div className="flex align-middle justify-center p-4 gap-4" >
                            <button className="btn " onClick={()=>{setPierceOrTattoo('tattoo')
                                                  setCounterPerForm(counterPerForm + 1)
                                                  setIsVisible(false)
                            }}>Tattoo</button>
                            <button className="btn" onClick={()=>{setPierceOrTattoo('piercing')
                                                  setCounterPerForm(counterPerForm + 1)
                                                  setIsVisible(false)}} >piercing</button>
                          </div>
                    </div>
                        
                    }

                  {/* ---- Form 2 Piercing ----- */}

                  <div>{
                          counterPerForm === 1 && pierceOrTattoo =='piercing' &&
                          <div className={`form-item ${smoothTransition}`}>

                            <h2 >che tipo di piercing vorresti?</h2>
                            <p>Ad esempio zona e dimensione</p>
                            <div className="flex align-middle justify-center p-4 gap-4" >
                              <textarea type="text" name="description" id="tat-desc" rows="4" cols="30" 
                                value={appointmentData.description}
                                onChange={(e)=>{setAppointmentData(curr=>({...curr, description:e.target.value}))}}
                                placeholder="scrivi qui la tua idea"
                                ></textarea>
                            </div>
                            
                            <div className="flex justify-center ">
                                <div className=" flex gap-4">
                                    {counterPerForm > 0 && 
                                        <button className="btn m-auto" onClick={()=>{
                                          setCounterPerForm(counterPerForm -1)
                                          setIsVisible(false)
                                        }}>
                                            precedente
                                        </button>
                                    }
                                    {counterPerForm < 4 && 
                                        <button className={`btn m-auto ${appointmentData.description.length < 10  ? 'text-gray-300 hover:bg-zinc-300' : 'text-zinc-800' } `} 
                                          disabled={appointmentData.description.length < 10 ? true : false} 
                                          onClick={()=>{
                                            setCounterPerForm(counterPerForm + 1)
                                            setIsVisible(false)
                                        }}>
                                            successivo
                                        </button>
                                    }
                                </div>
                            </div>
                          </div>
                      
                      }
                </div>

                {/* ---- Form 2 Tattoo ----- */}

                <div>{
                        counterPerForm === 1 && pierceOrTattoo =='tattoo' &&
                        <div className={`form-item ${smoothTransition}`}>

                          <h2 >Vuoi descrivere la tua idea?</h2>
                          <p>Ad esempio zona del tatuaggio, soggetto e dimensione</p>
                          <div className="flex align-middle justify-center p-4 gap-4" >
                            <textarea name="description" id="tat-desc" rows="4" cols="30" 
                              onChange={(e)=>{setAppointmentData(curr=>({...curr, description:e.target.value}))}}
                              placeholder="scrivi qui la tua idea"
                              ></textarea>
                          </div>
                          
                          <div className="flex justify-center ">
                              <div className=" flex gap-4">
                                  {counterPerForm > 0 && 
                                      <button className="btn m-auto" onClick={()=>{
                                        setCounterPerForm(counterPerForm -1)
                                        setIsVisible(false)
                                        }}>
                                          precedente
                                      </button>
                                  }
                                  {counterPerForm < 4 && 
                                      <button className={`btn m-auto ${appointmentData.description.length < 10  ? 'text-gray-300 hover:bg-zinc-300' : 'text-zinc-800' } `} 
                                        disabled={appointmentData.description.length < 10 ? true : false}
                                        onClick={()=>{
                                          setCounterPerForm(counterPerForm + 1);
                                          setIsVisible(false);

                                          }}>
                                          successivo
                                      </button>
                                  }
                              </div>
                          </div>
                        </div>
                    
                    }
                </div>

                 {/* ---- Form 3 ----- */}   

                <div >{
                    counterPerForm === 2 &&
                    <div className={`form-item p-4  ${smoothTransition}`}>
                        <p className="text-gray-300 font-bold">
                        inserisci il tuo numero:
                        </p>
                        <input type="tel" 
                            value={appointmentData.telephone}
                            id="phone"
                            onChange={(e)=>{setAppointmentData(curr=>({...curr, telephone:e.target.value}))}}
                            required
                            placeholder="+39 123456789"
                            />
                        <p className="text-gray-300 font-bold">
                          inserisci il tuo nome:
                        </p>
                        <input type="text"
                            value={appointmentData.clientName}
                            id="userName"
                            onChange={(e)=>{setAppointmentData(curr=>({...curr, clientName:e.target.value}))}}
                            required
                            placeholder="come ti chiami?"
                            />
                            
                          <div className="flex justify-center ">
                              <div className=" flex gap-4 mt-4">
                                  {counterPerForm > 0 && 
                                      <button className="btn m-auto" onClick={()=>{
                                        setCounterPerForm(counterPerForm -1)
                                        setIsVisible(false)
                                        }}>
                                        
                                          precedente
                                      </button>
                                  }
                                  {counterPerForm < 4 && 
                                      <button className={`btn m-auto ${appointmentData.telephone.length < 10 || appointmentData.clientName.length < 4  ?
                                        'text-gray-300 hover:bg-zinc-300' : 'text-zinc-800' } `} 
                                        disabled={appointmentData.telephone.length < 10  || appointmentData.clientName.length < 4 ? true : false} 
                                        onClick={()=>{
                                          setCounterPerForm(counterPerForm + 1)
                                          setIsVisible(false)
                                        }}>
                                          successivo
                                      </button>
                                  }
                              </div>
                          </div>
                    </div>
                    
                }
                </div>
               
                {/* ---- Form 4 Tattoo ----- */}

                <div className="flex p-2 artist-booking w-full ">{ 
                        counterPerForm === 3 && pierceOrTattoo =='tattoo' &&
                        <label className={`form-item  justify-center ${smoothTransition}`} htmlFor="select">
                          <div className="flex">
                            <h2 className="p-2 mt-4">Scegli un Tatuatore</h2>
                          </div>
                         <div className="artist-booking artists-list">
                            {artists?.map((artist , i) => (
                            <div className=" " key={`${artist.name}-${i}`} >
                                <SingleArtist 
                                    key={artist._id}
                                    name={artist.username}
                                    description={appointmentData.description}
                                    showButton={1}
                                    isTattooer={true}
                                    date={appointmentData.day}
                                    style={artist.style}
                                    userNumber={appointmentData.telephone}
                                    tattooArtistId={artist._id}
                                    clientName={appointmentData.clientName}
                                    btntext={'prenota appuntamento'}
                                    />
                            </div>
                            ))}
                        </div>
                        
                        <div className="flex justify-center ">
                            <div className=" flex gap-4">
                                {counterPerForm > 0 && 
                                    <button className="btn m-auto" onClick={()=>{
                                      setCounterPerForm(counterPerForm -1)
                                      setIsVisible(false)
                                      }}>
                                        precedente
                                    </button>
                                }
                            </div>
                        </div>
                        </label>
                    
                    }
                    
                </div>

                {/* ---- Form 4 Piercing ----- */}

                <div className="flex p-2 artist-booking  ">{ 
                        counterPerForm === 3 && pierceOrTattoo =='piercing' &&
                        <label className={`form-item  justify-center ${smoothTransition}`} htmlFor="select">
                          <div className="flex">
                            <h2 className="p-2">Scegli un Piercer</h2>
                          </div>
                         <div className="artist-booking artists-list">
                            {piercers?.map((piercer , i) => (
                            <div className="flex " key={`${piercer.name}-${i}`} >
                                <SingleArtist 
                                    key={piercer._id}
                                    name={piercer.username}
                                    description={appointmentData.description}
                                    showButton={1}
                                    isTattooer={false}
                                    date={appointmentData.day}
                                    userNumber={appointmentData.telephone}
                                    tattooArtistId={piercer._id}
                                    clientName={appointmentData.clientName}
                                    btntext={'prenota appuntamento'}
                                    />
                            </div>
                            ))}
                        
                        <div className="flex justify-center ">
                            <div className=" flex gap-4">
                                {counterPerForm > 0 && 
                                    <button className="btn m-auto" onClick={()=>{
                                      setCounterPerForm(counterPerForm -1)
                                      setIsVisible(false)
                                      }}>
                                        precedente
                                    </button>
                                }
                        </div>
                            </div>
                        </div>
                        </label>
                    
                    }
                    
                </div>
                </div>
                </div>
                
                </div>
                </div>
        </>
    ) 
}