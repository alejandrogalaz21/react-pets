import React, { Fragment, useState } from 'react'

function Form() {
  // Create State for the Appointments
  const [appointment, setAppointment] = useState({
    petName: '',
    ownerName: '',
    appointmentDate: '',
    appointmentTime: '',
    sympthoms: ''
  })

  // handle when the user types
  const handleOnChange = e => {
    console.log('user type...')
  }

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      <form>
        <label htmlFor='pet-name'>Nombre Mascota</label>
        <input
          type='text'
          name='petName'
          id='pet-name'
          className='u-full-width'
          placeholder='Nombre Mascota'
          onChange={handleOnChange}
        />

        <label htmlFor='owner-name'>Nombre Mascota</label>
        <input
          type='text'
          name='ownerName'
          id='owner-name'
          className='u-full-width'
          placeholder='Nombre dueño de la mascota'
          onChange={handleOnChange}
        />

        <label htmlFor='appointment-date'>Fecha</label>
        <input
          type='date'
          name='appointmentDate'
          id='appointment-date'
          className='u-full-width'
          onChange={handleOnChange}
        />

        <label htmlFor='appointment-time'>Hora</label>
        <input
          type='time'
          name='appointmentTime'
          id='appointment-time'
          className='u-full-width'
          onChange={handleOnChange}
        />

        <label htmlFor='symptoms'>Síntomas</label>
        <textarea className='u-full-width' onChange={handleOnChange}></textarea>

        <button type='submit' className='u-full-width button-primary'>
          Agregar Cita
        </button>
      </form>
    </Fragment>
  )
}

export default Form
