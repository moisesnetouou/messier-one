import { Footer } from './home/Footer';
import { Hero } from './home/Hero';
import { Services } from './home/Services';

export default function Home() {
  return (
    <div className="mx-auto max-w-[1120px]">
      <Hero />

      <Services />

      <Footer />
    </div>
  );
}
