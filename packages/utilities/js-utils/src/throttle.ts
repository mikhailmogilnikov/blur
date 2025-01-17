export const throttleFn = (callback: () => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastCall = 0;

  return () => {
    const now = Date.now();

    if (now - lastCall >= delay) {
      callback();
      lastCall = now;
    } else if (!timeoutId) {
      timeoutId = setTimeout(
        () => {
          callback();
          lastCall = Date.now();
          timeoutId = null;
        },
        delay - (now - lastCall),
      );
    }
  };
};
