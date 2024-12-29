"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';



const Nav = () =>{
    const isUserLoogedIn = false;
    const [Provider, setProvider] = useState(null);

    useEffect(() =>{
     const setProviders = async () =>{
        const response = await getProviders();

        setProvider(response);
     }
     setProvider();

    }, []); 

    return(
        <div className="navigation">
         <nav className="navItems">   
         <Link href="/">
           <Image src='/assets/icons/globe.svg' width="50" height="50" alt="" className="logoImg" />
           <p className="logo-text">Promptopia</p>
         </Link>
         </nav>

       {/* <!-- Desktop navigation -------> */}

         <div className="sm:flex   hidden ">
            {isUserLoogedIn ? (
             <div className="menu">

             <ul>
                <li>
                    <Link href="/create-post">Create Post</Link>
                </li>
                <li>
                    <Link href="#"onClick={signOut}>Sign out</Link>
                </li>
                <li>
                    <Link href="/profile">
                     <image src="assets/icons/file.svg" width="37" height="37" alt="" />
                    </Link>
                </li>
             </ul>

             </div>
            ):(
                <>
                {/* {providers && Object.values(providers).map((provider) => (
                    <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="blackButton">Sign in</button>
                ))} */}
                 <div>User not loggedIn</div>     
                </>
            )
        }
         </div>

        </div>
    )
}

export default Nav;