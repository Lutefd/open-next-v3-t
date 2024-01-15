'use client';
import { SetStateAction } from 'react';
interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;

  totalPages: number;
}
export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) {
  return (
    <div className="flex justify-center mt-4 ">
      <div className="flex md:min-w-[25rem] md:max-w-[25rem] justify-center">
        {/* Previous Page Button */}
        {currentPage > 1 && (
          <button
            className="px-4 py-2 mx-1 bg-white text-primary"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>
        )}

        {/* First Page */}
        {totalPages !== 1 && (
          <button
            className={`px-4 py-2 mx-1 ${
              currentPage === 1
                ? 'bg-primary text-white'
                : 'bg-gray-white text-primary'
            }`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
        )}

        {/* Ellipsis if needed */}
        {currentPage > 3 && (
          <span className="px-4 py-2 mx-1 text-primary">...</span>
        )}

        {/* Current Page */}
        {currentPage > 1 && currentPage < totalPages && (
          <button
            className={`px-4 py-2 mx-1 bg-primary text-white`}
            onClick={() => setCurrentPage(currentPage)}
          >
            {currentPage}
          </button>
        )}

        {/* Ellipsis if needed */}
        {currentPage < totalPages - 2 && (
          <span className="px-4 py-2 mx-1 text-primary">...</span>
        )}

        {/* Last Page */}
        {totalPages > 0 && (
          <button
            className={`px-4 py-2 mx-1 ${
              currentPage === totalPages
                ? 'bg-primary text-white'
                : 'bg-white text-primary'
            }`}
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </button>
        )}

        {/* Next Page Button */}
        {currentPage < totalPages && (
          <button
            className="px-4 py-2 mx-1 bg-white text-primary"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
