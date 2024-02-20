// import prisma from '../lib/prisma';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Home page</p>
    </main>
  );
}

// import { SessionProvider } from 'next-auth/react';
// import { AppProps } from 'next/app';

// const App = ({ Component, pageProps }: AppProps) => {
//   return (
//     <SessionProvider session={pageProps.session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// };

// export default App;