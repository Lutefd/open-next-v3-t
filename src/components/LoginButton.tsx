'use client';

import { signIn } from 'next-auth/react';
import React from 'react';

type LoginButtonProps = {
  children: React.ReactNode;
  provider: string;
  callbackUrl?: string;
};

export default function LoginButton({
  children,
  provider,
  callbackUrl,
}: LoginButtonProps) {
  return (
    <button
      className="bg-white hover:bg-gray-50 transition-all  hover:scale-105 active:scale-95 hover:text-primary-darker border-primary border-[1px] hover:border-primary-darker text-primary  px-6 py-2 rounded-md mt-6 flex gap-2 justify-center items-center"
      onClick={() => signIn(`${provider}`, { callbackUrl: callbackUrl })}
    >
      {children}
    </button>
  );
}
