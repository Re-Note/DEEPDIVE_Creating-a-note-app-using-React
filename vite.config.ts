import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/DEEPDIVE_Creating-a-note-app-using-React/', // GitHub Pages 경로 설정
});
