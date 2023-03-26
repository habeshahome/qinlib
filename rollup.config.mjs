import { nodeResolve } from '@rollup/plugin-node-resolve';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: 'src/index.tsx',
  output: {
    dir: 'lib',
    format: 'cjs'
  },
  plugins: [nodeResolve()]
};
