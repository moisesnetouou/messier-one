import Head from 'next/head';

import { Footer } from './home/Footer';
import { Hero } from './home/Hero';
import { Services } from './home/Services';

export default function Home() {
  return (
    <div className="mx-auto max-w-[1120px]">
      <Head>
        <title>Messier One</title>
        <meta name="description" content="Messier One, o amigo do Advogado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <Services />

      <Footer />
    </div>
  );
}