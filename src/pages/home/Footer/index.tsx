import { AiFillInstagram } from 'react-icons/ai';
import { BsFillTriangleFill, BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import { RoundedLink } from './RoundedLink';

export function Footer() {
  return (
    <footer className="mt-20 flex flex-1 items-center justify-around border-t border-t-[#eaeaea] py-8 xs:flex-col">
      <div className="flex items-center gap-2">
        <span>Powered by Delta</span>
        <BsFillTriangleFill />
      </div>

      <nav className="flex gap-2 xs:my-5">
        <RoundedLink href="mailto:example@messierone.com.br" icon={MdEmail} />

        <RoundedLink
          href="http://api.whatsapp.com/send?1=pt_BR&phone=5599999999999"
          icon={BsWhatsapp}
        />

        <RoundedLink
          href="https://www.instagram.com/examplemessierone/"
          icon={AiFillInstagram}
        />
      </nav>

      <a
        href="http://api.whatsapp.com/send?1=pt_BR&phone=5599999999999"
        className="flex items-center rounded-[0.625rem] bg-cyan-400 p-3 font-semibold text-white transition-all duration-500 hover:bg-cyan-800"
      >
        Entre em Contato
      </a>
    </footer>
  );
}
