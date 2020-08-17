import React, { Fragment } from 'react'

function Form() {
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
        />

        <label htmlFor='owner-name'>Nombre Mascota</label>
        <input
          type='text'
          name='ownerName'
          id='owner-name'
          className='u-full-width'
          placeholder='Nombre dueño de la mascota'
        />

        <label htmlFor='appointment-date'>Fecha</label>
        <input
          type='date'
          name='appointmentDate'
          id='appointment-date'
          className='u-full-width'
        />

        <label htmlFor='appointment-time'>Hora</label>
        <input
          type='time'
          name='appointmentTime'
          id='appointment-time'
          className='u-full-width'
        />

        <label htmlFor='symptoms'>Síntomas</label>
        <textarea className='u-full-width'></textarea>

        <button type='submit' className='u-full-width button-primary'>
          Agregar Cita
        </button>
      </form>
    </Fragment>
  )
}

export default Form
