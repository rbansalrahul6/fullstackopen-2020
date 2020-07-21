import React from 'react'

const PersonForm = ({ handleFormSubmit, name, onNameChange, number, onNumberChange }) => (
     <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={name} onChange={onNameChange}/>
        </div>
        <div>
          number: <input value={number} onChange={onNumberChange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
)

export default PersonForm
