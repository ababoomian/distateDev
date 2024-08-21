import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@distate/components': path.resolve(__dirname, 'src/components'),
  //     // Add more aliases as needed
  //   },
  // },
});
