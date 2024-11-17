import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookingForm from './components/BookingForm'
import Home from './pages/Home'
import { Route, Router, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import Artists from './pages/Artists'
import Booking from './pages/Booking'
import { AuthProvider } from './utilities/AuthContext'
import LogOrSign from './pages/LogOrSign'
import Tattoer from './pages/Tattoer'
import SingleBooking from './components/SingleBooking'

function App() {

  return (
    <>
     <AuthProvider>
        <NavBar/>
      <div className='flex pt-20 h-full'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tattooer' element={<Artists/>}/>
          <Route path="/booking" element={<Booking/>} />
          <Route path="/login" element={<LogOrSign/>} />
          <Route path="/personal-area" element={<Tattoer/>} />
          <Route path="/personal-area/appointments/:id" element={<SingleBooking/>} />
        </Routes>
      </div>
     </AuthProvider>
    </>
  )
}

export default App
