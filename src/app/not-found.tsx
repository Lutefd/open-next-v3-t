import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-primary md:text-4xl ">
            Nada por aqui
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            Desculpe, não conseguimos encontrar a página que você está
            procurando. Mas não se preocupe, você pode encontrar muitas coisas
            interessantes na nossa página inicial.
          </p>
          <a
            href="/"
            className="inline-flex text-white bg-primary hover:bg-primary-darker focus:ring-4 focus:outline-none focus:ring-primary-brighter font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Voltar a página inicial
          </a>
        </div>
      </div>
    </section>
  );
}
