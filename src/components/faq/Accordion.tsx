'use client';

import { Qnas, QnasData } from '@/types/faqs';
import { Nunito } from 'next/font/google';
import { useState } from 'react';
import Image from 'next/image';
import ChevronUp from '@/assets/icons/chevron-up.svg';
import ChevronDown from '@/assets/icons/chevron-down.svg';
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

const Accordion = ({ data }: Qnas) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pb-12">
      {data.map((item: QnasData, index: number) => (
        <div
          className="border rounded-md mt-2 overflow-hidden max-w-full md:max-w-xl md:min-w-[36rem]"
          key={item.id}
        >
          <div
            className={`  font-sans cursor-pointer p-4 flex justify-between items-center gap-4`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <p className="text-lg font-[300] text-[#323C32] break-words">
              {item.attributes.question}
            </p>
            <span>
              {openIndex === index ? (
                <Image
                  src={ChevronUp}
                  width={24}
                  height={24}
                  alt="chevron down"
                />
              ) : (
                <Image
                  src={ChevronDown}
                  width={24}
                  height={24}
                  alt="chevron down"
                />
              )}
            </span>
          </div>
          {openIndex === index && (
            <div className="bg-[#F8F9F7] border-t-[1px] border-[#CDD3CD] max-w-[21.5rem] md:max-w-[36rem]">
              <p
                className={`${nunito.variable} font-nunito font-[300] text-[#323C32] mt-2 p-4 break-words`}
              >
                {item.attributes.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
