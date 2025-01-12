import { MutableRefObject, useMemo, useRef } from 'react';

/**
 * Offers an object ref for a given callback ref or an object ref. Especially
 * helfpul when passing forwarded refs (created using `React.forwardRef`) to
 * React Aria hooks.
 *
 * @param forwardedRef The original ref intended to be used.
 * @returns An object ref that updates the given ref.
 * @see https://reactjs.org/docs/forwarding-refs.html
 */
export function useObjectRef<T>(
  forwardedRef?: ((instance: T | null) => void) | MutableRefObject<T | null> | null,
): MutableRefObject<T | null> {
  const objRef: MutableRefObject<T | null> = useRef<T>(null);

  return useMemo(
    () => ({
      get current() {
        return objRef.current;
      },
      set current(value) {
        objRef.current = value;
        if (typeof forwardedRef === 'function') {
          forwardedRef(value);
        } else if (forwardedRef) {
          forwardedRef.current = value;
        }
      },
    }),
    [forwardedRef],
  );
}
