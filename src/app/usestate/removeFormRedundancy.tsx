"use client";

import { useState } from "react";

const RemoveFormRedundancy = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  let fullName = firstName + " " + lastName;
  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{" "}
        <input
          value={firstName}
          onChange={(e: any) => {
            setFirstName(e.target.value);
          }}
        />
      </label>
      <label>
        First name:{" "}
        <input
          value={lastName}
          onChange={(e: any) => {
            setLastName(e.target.value);
          }}
        />
      </label>
      <p>Your ticket will be issued to: {fullName}</p>
    </>
  );
};

export default RemoveFormRedundancy;
