"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut, useSession} from 'next-auth/react';

function Navbar() {
  const { data: session }: any = useSession();
    return (
      <div className="flex flex-col justify-between h-screen p-4">
        <div className="flex flex-col items-center">
          <nav className="navLinks">
            <Link className="discoverLink" href="/recipes/">Discover</Link>
            <Link className="AboutLink" href="/about/">About Us</Link>
            {/* I might erase this one */}
            <Link className="profileLink"href="/profile/">My Profile</Link>
            {!session ? (
            <>
              <Link className="loginLink" href="/api/auth/signin">Login</Link>
            </>
          ) : (
            <>
              {session.user?.email}
              <button onClick={() => {signOut();}} className="logoutbtn">Logout</button>
            </>
          )}
            {/* <button className="bg-white rounded-full border border-gray-200 text-gray-800 px-4 py-2 flex items-center space-x-2 hover:bg-gray-200">
              <img className="profileImage" src="https://xsgames.co/randomusers/avatar.php?g=female" alt="User profile"/>
              <span onClick={() => signOut()}>Logout</span>
            </button> */}
          </nav>
        </div>
      </div>
    );
  }
  

  export default Navbar;

// export default function Header(){
//     const { data: session, status } = useSession();
//     let links = null;
//     if (!session) {
//         links = (<>
//         <Link href="/app/recipes/">
//             <a className="discoverLink"> Discover </a>
//         </Link>
//         <Link href="/app/about/">
//             <a className="aboutLink"> About Us </a>
//         </Link>
//         <Link href="/api/auth/signin">
//             <a className="loginLink" href='/'>Log in</a>
//         </Link>
//         </>);
//     }
//     if (session) {
//         links = (<>
        // <Link href="/app/recipes/">
        //     <a className="discoverLink"> Discover </a>
        // </Link>
        // <Link href="/app/about/">
        //     <a className="AboutLink"> About Us </a>
        // </Link>
        // <Link href="/app/profile">
        //     <a className="profileLink" href='/'>My Profile</a>
        // </Link>
//         <p>
//           {session.user.name} ({session.user.email})
//         </p>
//         <button className="logoutButton" onClick={() => signOut()}>
//           <a>Log out</a>
//         </button>
//         </>);
//     }
//     return(
//         <header>
//         {/* logo */}
//         <nav>
//         {links}
//         </nav>
//         </header>
//     )
// }