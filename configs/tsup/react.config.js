/** @type {import('tsup').Options} */
export default {
  clean: true,
  minify: true,
  target: 'es2019',
  format: ['cjs', 'esm'],
  banner: { js: '"use client";' },
};
