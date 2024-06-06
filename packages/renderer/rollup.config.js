import typescript from '@rollup/plugin-typescript';

export default {
  input: 'index.ts',
  output: {
    file: 'dist/renderer.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [typescript()],
};
