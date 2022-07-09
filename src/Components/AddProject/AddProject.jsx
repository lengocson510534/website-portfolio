import React from 'react'
import { useState } from 'react'

const AddProject = (props) => {

  const [openModal, setOpenModal] = useState(false)

  const handleCloseModal = (e) => {
    e.preventDefault()
    setOpenModal(!openModal)
  }

  return (
    <>
      <div
        onClick={() => setOpenModal(!openModal)}
        className="add__project__open">
        <i className='bx bxs-image-add'></i>
      </div>
      <div className={`add__project ${openModal ? `active` : ""}`}>
        <form className='add__project__form'>
          <label className='add__project__img'>Add project image</label>
          <input type="file" name='Add project' className='add__project__file' />
          <label className='add__project__desc'>Add project description</label>
          <textarea className='add__project__text' type="text" placeholder='Add project description' />
          <div className='add__project__submit'>
            <button className='add__project__btn'>Submit</button>
            <button
              onClick={e => handleCloseModal(e)}
              className='add__project__btn'
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddProject