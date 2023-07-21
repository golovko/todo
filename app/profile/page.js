"use client"

import React from 'react';
import { signIn, singOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";
import LoginBtn  from '../components/LoginBtn'

export default function Profile() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState();


  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <>
        <p>Access Denied</p>
        <LoginBtn />
      </>
    );
  } else if (status === "authenticated"){
    
    return (
      <div className='textblock'>
        <p>Signed in as {session.user.name}</p>
        <h1>Protected Page</h1>
        <p>You can view this page because you are signed in.</p>

      </div>
    );
  }
}
