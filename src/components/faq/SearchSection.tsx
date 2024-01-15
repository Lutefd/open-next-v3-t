'use client';

import SearchIcon from '@/assets/icons/ic_search.svg';
import Image from 'next/image';
import { SetStateAction, useState, useRef } from 'react';
import { Categories, CategoriesData } from '@/types/faqs';
import useOutsideClick from '@/hooks/useOutsideClick';
import Link from 'next/link';

interface SearchSectionProps {
  response: Categories;
}

const SearchSection = ({ response }: SearchSectionProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<CategoriesData[]>([]);
  const [showResults, setShowResults] = useState(false);
  const data = response.data;

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const filteredResults = data.filter((item) => {
      return (
        item.attributes.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        item.attributes.slug
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        item.attributes.qnas.data.some((qna) =>
          qna.attributes.slug.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    });

    setResults(filteredResults.slice(0, 6));
    setShowResults(true);
  };
  const node = useRef<HTMLAnchorElement>(null);
  const containerNode = useRef<HTMLDivElement>(null);
  const inputNode = useRef<HTMLInputElement>(null);
  const buttonNode = useRef<HTMLButtonElement>(null);
  useOutsideClick([node, buttonNode, inputNode, containerNode], () => {
    if (showResults) {
      setShowResults(false);
    }
  });
  return (
    <section className={`  font-sans flex flex-col items-center py-16`}>
      <h1 className="text-4xl px-8 text-center md:text-start font-[300] mb-14">
        Olá! Como podemos te ajudar?
      </h1>
      <form
        onSubmit={handleSearch}
        className="relative w-72 md:w-full md:max-w-2xl"
      >
        <input
          id="default-search"
          type="text"
          className="block w-full pl-3 pr-10 py-2 border-b-2 border-gray-300 text-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary"
          placeholder="Buscar"
          value={searchQuery}
          onChange={handleInputChange}
          required
          ref={inputNode}
          autoComplete="off"
        />
        <button
          type="submit"
          className="absolute right-0 bottom-0 p-3"
          ref={buttonNode}
        >
          <Image
            src={SearchIcon}
            className="w-6 h-6"
            aria-hidden="true"
            alt="search icon"
          />
        </button>
      </form>
      {showResults && (
        <div
          className="bg-white shadow-lg p-6 flex flex-col w-72 md:w-full md:max-w-2xl"
          ref={containerNode}
        >
          {results.length > 0 ? (
            results.map((result) => (
              <Link
                href={`/faq/${result.attributes.slug}`}
                key={result.attributes.slug}
                ref={node}
                className="hover:text-primary"
                prefetch
              >
                <h2>{result.attributes.title}</h2>
              </Link>
            ))
          ) : (
            <a href="#" ref={node} className="hover:text-primary">
              <h2>Nenhum resultado encontrado.</h2>
            </a>
          )}
        </div>
      )}
    </section>
  );
};

export default SearchSection;
