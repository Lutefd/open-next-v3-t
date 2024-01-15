import Image from 'next/image';
import WhatsappQr from '@/assets/qrcode-whatsapp.png';

const CustomHomeFooter = () => {
  return (
    <footer className="bg-white border-t-[1px] border-[#CDD3CD]">
      <div
        className={`  font-sans mx-auto w-full max-w-screen-xl p-4 py-12 lg:py-16 font-[500]`}
      >
        <div className="grid md:grid-cols-2 gap-8 sm:gap-6  xl:grid-cols-4">
          <div className="md:row-span-2 text-lg">
            <h2 className="mb-2 text-lg  text-gray-900  ">
              WhatsApp Corporativo
            </h2>
            <ul className=" text-[#323C32] font-[300]">
              <li className="mb-2">
                <p className=" ">Todas as regiões </p>
              </li>
              <li className="mb-2">
                <p className="text-primary text-2xl font-medium">
                  51 3358 4770
                </p>
              </li>
              <li className="mb-3">
                <p className="text-[0.875rem]">
                  *Serviço disponível conforme adesão das cooperativas
                </p>
              </li>
              <li>
                <Image
                  src={WhatsappQr}
                  alt="Whatsapp QR Code"
                  width={120}
                  height={120}
                />
              </li>
            </ul>
          </div>
          <div className="md:row-span-2 text-lg">
            <h2 className="mb-2 text-lg  text-gray-900  ">
              Serviços por telefone
            </h2>
            <ul className=" text-[#323C32] font-[300]">
              <li className="mb-2">
                <p className=" ">Capitais e Regiões Metropolitanas </p>
              </li>
              <li className="mb-2">
                <p className="text-primary text-2xl font-medium">3003 4770</p>
              </li>
              <li className="md:mb-8">
                <p className="text-[0.875rem]">*Custo de ligação local</p>
              </li>
            </ul>
            <div>
              <h2 className="mb-2 text-lg  text-gray-900  ">Demais regiões</h2>
              <ul className=" text-[#323C32] font-[300]">
                <li className="mb-2">
                  <p className="text-primary text-2xl font-medium">
                    0800 724 4770
                  </p>
                </li>
                <li className="">
                  <p className="text-[0.875rem]">*Sem custo de ligação</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:row-span-2 text-lg">
            <h2 className="mb-2 text-lg  text-gray-900  ">SAC</h2>
            <ul className=" text-[#323C32] font-[300]">
              <li className="mb-2">
                <p className=" ">Informações, elogios e reclamações</p>
              </li>
              <li className="mb-2">
                <p className="text-primary text-2xl font-medium">
                  0800 724 7220
                </p>
              </li>
            </ul>
            <div>
              <h2 className="mb-2 md:mt-16 text-lg  text-gray-900  ">
                Ouvidoria
              </h2>
              <ul className=" text-[#323C32] font-[300]">
                <li className="mb-2">
                  <p className=" ">Reclamações e denúncias</p>
                </li>
                <li className="mb-2">
                  <p className="text-primary text-2xl font-medium">
                    0800 646 2519
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:row-span-2 text-lg">
            <h2 className="mb-2 text-lg  text-gray-900  ">
              Chamadas Internacionais
            </h2>
            <ul className=" text-[#323C32] font-[300]">
              <li className="mb-2">
                <p className=" ">(A cobrar)</p>
              </li>
              <li className="mb-2">
                <p className="text-primary text-2xl font-medium">
                  +55 51 3378 4472
                </p>
              </li>
            </ul>
            <div>
              <h2 className="mb-2 md:mt-16 text-lg  text-gray-900  ">
                Atendimento aod deficientes
              </h2>
              <ul className=" text-[#323C32] font-[300]">
                <li className="mb-2">
                  <p className=" ">Auditivos ou fala</p>
                </li>
                <li className="mb-2">
                  <p className="text-primary text-2xl font-medium">
                    0800 724 0525
                  </p>
                </li>
              </ul>
            </div>
          </div>{' '}
        </div>
      </div>
    </footer>
  );
};

export default CustomHomeFooter;
