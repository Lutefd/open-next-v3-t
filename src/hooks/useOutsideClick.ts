'use client';

import { useEffect } from 'react';
/**
 * Handles observer pattern for outside click events.
 * @param Array of refs to be excluded from the outside click event.
 * @returns void
 *
 * @example useOutsideClick([ref1, ref2], () => console.log('outside click'));
 */
function useOutsideClick(
  refs: React.RefObject<HTMLElement>[],
  callback: () => void
) {
  const handleClick = (e: MouseEvent) => {
    if (
      refs.every(
        (ref) => ref.current && !ref.current.contains(e.target as Node)
      )
    ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
}
export default useOutsideClick;
