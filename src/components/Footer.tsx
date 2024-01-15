import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className={`  font-sans bg-[#F8F9F7] border border-t-2 border-[#CDD3CD] mt-auto `}
    >
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols- md:grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:gap-6  xl:gap-6 xl:grid-cols-4 font-[500]">
          {/* <div className="xl:w-[294px]">
            <div className="flex flex-col gap-4">
              <div className="border-t-2 border-primary w-40" />
              <h2 className="mb-6 text-xl  text-gray-900 ">Sobre nós</h2>
            </div>
            <ul className="text-[#828A82] text-xl font-semibold">
              <li className="mb-4">
                <a href="#" className="  ">
                  Quem Somos
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className=" ">
                  Cooperativismo
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className=" ">
                  Sustentabilidade
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className=" ">
                  Trabalhe conosco
                </a>
              </li>
            </ul>
          </div> */}
          <div className="hidden xl:block"></div>
          <div className="xl:w-[294px]">
            <div className="flex flex-col gap-4">
              <div className="border-t-2 border-primary w-40 " />
              <h2 className="mb-6 text-xl  text-gray-900 ">Como funciona</h2>
            </div>
            <ul className="text-[#828A82] text-xl font-semibold">
              {/* <li className="mb-4">
                <a href="#" className="  ">
                  Open Banking Brasil
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className=" ">
                  APIs Open Banking
                </a>
              </li> */}
              <li className="mb-4">
                <a href="#" className=" ">
                  Políticas e Relatórios
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="xl:w-[294px]">
            <div className="flex flex-col gap-4">
              <div className="border-t-2 border-primary w-40" />
              <h2 className="mb-6 text-xl  text-gray-900 ">Nossas APIs</h2>
            </div>
            <ul className="text-[#828A82] text-xl font-semibold">
              <li className="mb-4">
                <a href="#" className="  ">
                  Canais
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className=" ">
                  Crédito
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className=" ">
                  Poupança
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className=" ">
                  Conta Corrente
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className=" ">
                  Cartão de Crédito
                </a>
              </li>
            </ul>
          </div> */}
          <div className="xl:w-[294px]">
            <div className="flex flex-col gap-4">
              <div className="border-t-2 border-primary w-40 " />
              <h2 className="mb-6 text-xl  text-gray-900 ">Suporte</h2>
            </div>
            <ul className="text-[#828A82] text-xl font-semibold">
              <li className="mb-4">
                <Link href="/faq" className="  ">
                  FAQ
                </Link>
              </li>
              {/* <li className="mb-4">
                <a href="#" className=" ">
                  Chat
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className=" ">
                  Documentação
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className=" ">
                  Fóruns de
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
