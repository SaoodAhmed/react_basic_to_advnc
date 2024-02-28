import React from 'react'

type ContactListType = {
    contacts:any;
    selectedContact?:any;
    onSelect:any
}

const ContactList = ({contacts,selectedContact,onSelect}:ContactListType) => {
  return (
    <div>
        <ul className=' list-none'>
            {
                contacts.map((contact:any)=>(
                    <li key={contact.email} className='mt-1'>
                        <button onClick={()=>{onSelect(contact)}}>{contact.name}</button>
                    </li>
                ))
            }
            <br/>
        </ul>
    </div>
  )
}

export default ContactList