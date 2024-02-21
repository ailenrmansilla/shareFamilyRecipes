import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

export async function Header(){
    const { data: session, status } = useSession();
    let links = null;
    if (!session) {
        links = (<>
        <Link href="/app/recipes/">
            <a className="discoverLink"> Discover </a>
        </Link>
        <Link href="/app/about/">
            <a className="discoverLink"> About Us </a>
        </Link>
        <Link href="/api/auth/signin">
            <a className="loginLink" href='/'>Log in</a>
        </Link>
        </>);
    }
    if (session) {
        links = (<>
        <Link href="/app/recipes/">
            <a className="discoverLink"> Discover </a>
        </Link>
        <Link href="/app/about/">
            <a className="discoverLink"> About Us </a>
        </Link>
        <Link href="/app/profile">
            <a className="profileLink" href='/'>My Profile</a>
        </Link>
        <p>
          {session.user.name} ({session.user.email})
        </p>
        <button className="logoutButton" onClick={() => signOut()}>
          <a>Log out</a>
        </button>
        </>);
    }
    return(
        <>
        {/* logo */}
        <nav>
        {links}
        </nav>
        </>
    )
}