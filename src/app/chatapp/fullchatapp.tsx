"use client"

import { useState } from "react";
import ContactList from "./contactList";
import Chat from "./chat";



const Fullchatapp = () => {

    const [to, setTo] = useState(Contacts[0])

  return (
    <div className=" flex  gap-x-8">
        <ContactList contacts={Contacts} onSelect={(contact:any)=>setTo(contact)}  />
        <Chat key={to.email} contact={to}/>
    </div>
  )

};

const Contacts = [
  { name: "Saud Ahmed", email: "saud@mail.com" },
  { name: "Sijad Chandio", email: "sijad@gmail.com" },
  { name: "Hammad", email: "hammad@gmail.com" },
];

export default Fullchatapp;
