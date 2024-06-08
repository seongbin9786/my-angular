// vite.config.ts
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // Remarks: 이게 없으면 renderer의 절대 경로를 인식하지 못합니다.
  plugins: [tsconfigPaths()],
});
