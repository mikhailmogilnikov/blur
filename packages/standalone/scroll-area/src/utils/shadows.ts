export const verticalShadow = [
  '[data-top-scroll="true"]{mask-image: linear-gradient(0deg, #000 calc(100% - var(--scroll-shadow-size)), transparent);}',
  '[data-bottom-scroll="true"]{mask-image: linear-gradient(180deg, #000 calc(100% - var(--scroll-shadow-size)), transparent);}',
  '[data-top-bottom-scroll="true"]{mask-image: linear-gradient(#000, #000, transparent 0, #000 var(--scroll-shadow-size), #000 calc(100% - var(--scroll-shadow-size)), transparent);}',
].join(' ');

export const horizontalShadow = [
  '[data-left-scroll="true"] {mask-image: linear-gradient(270deg, #000 calc(100% - var(--scroll-shadow-size)), transparent);}',
  '[data-right-scroll="true"] {mask-image: linear-gradient(90deg, #000 calc(100% - var(--scroll-shadow-size)), transparent);}',
  '[data-left-right-scroll="true"] {mask-image: linear-gradient(to right, #000, #000, transparent 0, #000 var(--scroll-shadow-size), #000 calc(100% - var(--scroll-shadow-size)), transparent);}',
].join(' ');
