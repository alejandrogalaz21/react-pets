import React, { Fragment, useState, useEffect } from 'react'
import Form from './components/Form'
import Appointment from './components/Appointment'

function App() {
  //Initial Appointments in Local Storage
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'))

  // Set array if they not are appointments
  if (!initialAppointments) initialAppointments = []

  // Appointments array
  const [appointments, setAppoiments] = useState(initialAppointments)
  // Run when component ready and unmount
  useEffect(() => {
    console.log('ready, or change appoiments')
    if (initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments))
    } else {
      localStorage.setItem('appointments', JSON.stringify([]))
    }
    return () => {
      console.log('Clean')
    }
  }, [appointments, initialAppointments])

  // handle addAppointment prop for Form child component.
  const addApointment = appoiment => setAppoiments([...appointments, appoiment])

  // handle deleteAppointment prop for Appointment child component.
  const deleteAppointment = id =>
    setAppoiments(appointments.filter(appoiment => appoiment.id !== id))

  // Message
  const title = appointments.length === 0 ? 'No hay Citas' : 'Administra tus Citas'

  return (
    <Fragment>
      <div className='container'>
        <div className='one-half column'>
          <Form addApointment={addApointment} />
        </div>
        <div className='one-half column'>
          <h2>{title}</h2>
          {appointments.map(appointment => (
            <Appointment
              key={appointment.id}
              appointment={appointment}
              deleteAppointment={deleteAppointment}
            />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default App
