"use client"

import React, { useState } from 'react'

const Formredundant = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [fullName, setFullName] = useState('')



    function handleFirstNameChange(e:any){
        setFirstName(e.target.value)
        setFullName(e.target.value + " " + lastName)
    }

    function handleLastNameChange(e:any){
        setLastName(e.target.value)
        setFullName(firstName + " " + e.target.value)
    }

    

  return (
    <>
        <h2>Let's Check you in</h2>
        <label>
            First Name:{' '}<input value={firstName} onChange={handleFirstNameChange}/>
        </label>
        <label>
            Last Name:{' '}<input value={lastName} onChange={handleLastNameChange}/>
        </label>
        <p>Your ticket will be issued to: <b>{fullName}</b></p>
    </>
  )
}

export default Formredundant