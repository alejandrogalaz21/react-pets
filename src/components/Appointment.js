import React from 'react'
import PropTypes from 'prop-types'

function Appointment({ appointment, deleteAppointment }) {
  const { petName, ownerName, appointmentDate, appointmentTime, sympthoms, id } = appointment
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
      <button
        type='button'
        className='button eliminar u-full-width'
        onClick={() => deleteAppointment(id)}>
        Eliminar &times;
      </button>
    </div>
  )
}

Appointment.propTypes = {}

export default Appointment
