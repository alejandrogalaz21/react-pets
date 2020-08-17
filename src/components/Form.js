import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Form() {
  // Create State for the form.
  const [appointment, setAppointment] = useState({
    petName: '',
    ownerName: '',
    appointmentDate: '',
    appointmentTime: '',
    sympthoms: ''
  })

  const [error, setError] = useState(false)

  const { petName, ownerName, appointmentDate, appointmentTime, sympthoms } = appointment

  // handle when the user types.
  const handleOnChange = e => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    // validate
    if (
      petName.trim() === '' ||
      ownerName.trim() === '' ||
      appointmentDate.trim() === '' ||
      appointmentTime.trim() === '' ||
      sympthoms.trim() === ''
    ) {
      setError(true)
      return
    }
    // Delete previous error
    setError(false)
    // Create and Add id
    appointment.id = uuidv4()

    // create appointment

    // reset form
  }

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {error ? <p className='alerta-error'>Todos Los Campos Son Obligatorios</p> : null}

      <form onSubmit={handleOnSubmit}>
        <label htmlFor='pet-name'>Nombre Mascota</label>
        <input
          type='text'
          name='petName'
          id='pet-name'
          className='u-full-width'
          placeholder='Nombre Mascota'
          onChange={handleOnChange}
          value={petName}
        />

        <label htmlFor='owner-name'>Nombre Mascota</label>
        <input
          type='text'
          name='ownerName'
          id='owner-name'
          className='u-full-width'
          placeholder='Nombre dueño de la mascota'
          onChange={handleOnChange}
          value={ownerName}
        />

        <label htmlFor='appointment-date'>Fecha</label>
        <input
          type='date'
          name='appointmentDate'
          id='appointment-date'
          className='u-full-width'
          onChange={handleOnChange}
          value={appointmentDate}
        />

        <label htmlFor='appointment-time'>Hora</label>
        <input
          type='time'
          name='appointmentTime'
          id='appointment-time'
          className='u-full-width'
          onChange={handleOnChange}
          value={appointmentTime}
        />

        <label htmlFor='symptoms'>Síntomas</label>
        <textarea
          className='u-full-width'
          onChange={handleOnChange}
          name='sympthoms'
          value={sympthoms}></textarea>

        <button type='submit' className='u-full-width button-primary'>
          Agregar Cita
        </button>
      </form>
    </Fragment>
  )
}

export default Form
