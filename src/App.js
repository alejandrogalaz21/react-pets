import React, { Fragment, useState } from 'react'
import Form from './components/Form'
import Appointment from './components/Appointment'

function App() {
  const [appoiments, setAppoiments] = useState([])

  // handle addAppointment prop for Form child component.
  const addApointment = appoiment => setAppoiments([...appoiments, appoiment])

  // handle deleteAppointment prop for Appointment child component.
  const deleteAppointment = id =>
    setAppoiments(appoiments.filter(appoiment => appoiment.id !== id))

  // Message
  const title = appoiments.length === 0 ? 'No hay Citas' : 'Administra tus Citas'

  return (
    <Fragment>
      <div className='container'>
        <div className='one-half column'>
          <Form addApointment={addApointment} />
        </div>
        <div className='one-half column'>
          <h2>{title}</h2>
          {appoiments.map(appointment => (
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
