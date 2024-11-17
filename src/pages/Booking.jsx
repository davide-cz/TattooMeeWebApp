import axios from "axios";
import { useEffect, useState } from "react"
import SingleArtist from "../components/SingleArtist";

const { VITE_URI } = import.meta.env


export default function (){

//   ----------------chiamata per tautatori

const [artists, setArtists] = useState([]);
const [pierceOrTattoo, setPierceOrTattoo] = useState('');

useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get(`${VITE_URI}/user/tattooer`);
        setArtists(response.data);
      } catch (error) {
        console.error('Errore nel recuperare i tatuatori', error);
      }
    };
    fetchArtists();
  }, []);

// creazione form di prenotazione giorno / id tattooer / n telefono oppure email

const [appointmentData, setAppointmentData]=useState({
    email:'',
    telephone:'',
    day:'',
    tattooer:'',
    clientName:'',
    pierceOrTattoo:'',
    description:''
})

//   ------------ funzione di prenotazione //////


/* const handleBooking = async () => {
    try {
      const response = await axios.post( `${VITE_URI}/booking`, {
        date:appointmentData.day,
        userNumber:appointmentData.telephone,
        tattooArtistId: appointmentData.tattooer
      });
      console.log(response.data);
    } catch (error) {
      console.error("Errore nella prenotazione", error);
    }
  };
 */
  const handleSelectTattooer = (tattooer)=>{
    setAppointmentData(curr=>({...curr, tattooer:tattooer}))
  }

const [counterPerForm , setCounterPerForm] =useState(0)
    return(

        <>
            <div className="booking-component m-auto   justify-center align-middle ">
            <div className=" h-full ">

                <div className={counterPerForm===5   ? `flex justify-center` : `booking-form ` }>
                    
                <div >{
                    counterPerForm === 0 &&
                    <div className="">
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
                    </div>
                }
                </div>
                <div >{
                    counterPerForm === 1 &&
                    <div className="">
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
                    </div>
                }
                </div>
                <div>{
                        counterPerForm === 2 &&
                        <div>

                          <h2 >Vuoi Fare un Tatuaggio o Piercing?</h2>
                          <div className="flex align-middle justify-center p-4 gap-4" >
                            <button className="btn " onClick={()=>{setPierceOrTattoo('tattoo')
                                                  setCounterPerForm(counterPerForm + 1)
                            }}>Tattoo</button>
                            <button className="btn" onClick={()=>{setPierceOrTattoo('piercing')
                                                  setCounterPerForm(counterPerForm + 1)}} >piercing</button>
                          </div>
                        </div>
                    
                    }
                </div>
                <div>{
                        counterPerForm === 3 && pierceOrTattoo =='piercing' &&
                        <div>

                          <h2 >che tipo di piercing vorresti?</h2>
                          <p>Ad esempio zona e dimensione</p>
                          <div className="flex align-middle justify-center p-4 gap-4" >
                            <input type="text" name="description" id="tat-desc" rows="4" cols="50" 
                              value={appointmentData.description}
                              onChange={(e)=>{setAppointmentData(curr=>({...curr, description:e.target.value}))}}
                              placeholder="scrivi qui la tua idea"
                              ></input>
                          </div>
                        </div>
                    
                    }
                </div>
                <div>{
                        counterPerForm === 3 && pierceOrTattoo =='tattoo' &&
                        <div>

                          <h2 >Vuoi descrivere la tua idea?</h2>
                          <p>Ad esempio zona del tatuaggio, soggetto e dimensione</p>
                          <div className="flex align-middle justify-center p-4 gap-4" >
                            <textarea name="description" id="tat-desc" rows="4" cols="50" 
                              onChange={(e)=>{setAppointmentData(curr=>({...curr, description:e.target.value}))}}
                              placeholder="scrivi qui la tua idea"
                              ></textarea>
                          </div>
                        </div>
                    
                    }
                </div>{/* 
                <div>{
                        counterPerForm === 4 &&
                        <label htmlFor="appointmentDate">Data Appuntamento:
                        <input
                            type="date"
                            id="appointmentDate"
                            value={appointmentData.day}
                            onChange={(e)=>{setAppointmentData(curr=>({...curr, day:e.target.value}))}}
                            required
                            />
                    </label>
                    }
                </div> */}
                
                <div className="flex">{ 
                        counterPerForm === 4 && pierceOrTattoo =='tattoo' &&
                        <label className="justify-center" htmlFor="select">
                          <div className="flex">
                            <h2 className="p-2">Scegli un tatuatore</h2>
                          </div>
                         <div className="artist-booking flex artists-list">
                            {artists.map(artist => (
                            <div className="" key={`${artist.name}`} >
                                <SingleArtist 
                                    key={artist._id}
                                    name={artist.name}
                                    description={artist.description}
                                    showButton={1}
                                    date={appointmentData.day}
                                    userNumber={appointmentData.telephone}
                                    tattooArtistId={artist._id}
                                    clientName={appointmentData.clientName}
                                    btntext={'prenota appuntamento'}
                                    />
                            </div>
                            ))}
                        </div>
                        </label>
                    
                    }
                </div>
                </div>
                  <div className="flex justify-center ">
                      <div className=" flex gap-4">
                          {counterPerForm > 0 && 
                              <button className="btn m-auto" onClick={()=>{setCounterPerForm(counterPerForm -1)}}>
                                  precedente
                              </button>
                          }
                      {counterPerForm < 4 && 
                          <button className="btn m-auto" onClick={()=>{setCounterPerForm(counterPerForm + 1)}}>
                              successivo
                          </button>
                      }
                      </div>
                  </div>
                </div>
            </div>
        </>
    ) 
}