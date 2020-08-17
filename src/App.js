import React, { Fragment, useState } from 'react'
import Form from './components/Form'
import Appointment from './components/Appointment'

function App() {
  const [appoiments, setAppoiments] = useState([])

  const createAppointment = appoiment => setAppoiments([...appoiments, appoiment])

  return (
    <Fragment>
      <div className='container'>
        <div className='one-half column'>
          <Form addApointment={createAppointment} />
        </div>
        <div className='one-half column'>
          {appoiments.map(appointment => (
            <Appointment key={appointment.id} appointment={appointment} />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default App
