import React from 'react'
import PropTypes from 'prop-types'

function Appointment({ appointment }) {
  const { petName, ownerName, appointmentDate, appointmentTime, sympthoms } = appointment
  return (
    <div className='cita'>
      <p>
        Mascota: <span>{petName}</span>
      </p>
      <p>
        Dueño: <span>{ownerName}</span>
      </p>
      <p>
        Fecha: <span>{appointmentDate}</span>
      </p>
      <p>
        Hora: <span>{appointmentTime}</span>
      </p>
      <p>
        Síntomas: <span>{sympthoms}</span>
      </p>
    </div>
  )
}

Appointment.propTypes = {}

export default Appointment
