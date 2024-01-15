'use client';

import { useRouter } from 'next/navigation';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  return (
    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-3xl tracking-tight font-extrabold lg:text-4xl text-primary ">
            Ocorreu um erro na aplicação
          </h1>
          <p className="mb-4 text-xl tracking-tight font-bold text-gray-600 md:text-xl line-clamp-2 ">
            {error.message}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 ">
            Nós vamos trabalhar para resolver o problema. Por favor, reporte o
            erro para o nosso time de desenvolvimento.
          </p>
          <button
            className="inline-flex text-white bg-primary hover:bg-primary-darker focus:ring-4 focus:outline-none focus:ring-primary-brighter font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
            onClick={() => {
              console.log('error name', error.name);
              console.log('error message', error.message);
              console.log('error stack', error.stack);
              console.log('error digest', error.digest);
              console.log('error cause', error.cause);
              router.push('/');
            }}
          >
            Reportar erro e voltar ao inicio
          </button>
        </div>
      </div>
    </section>
  );
}
