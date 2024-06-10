import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import swc from 'vite-plugin-swc-only';

export default defineConfig({
  esbuild: false,
  plugins: [
    // Remarks: 이게 없으면 renderer의 절대 경로를 인식하지 못합니다.
    tsconfigPaths(),
    // Remarks: 이게 없으면 emitDecoratorMetadata가 없어 reflect-metadata를 사용해도 런타임에서 타입 정보를 알 수 없습니다.
    swc({
      jsc: {
        parser: {
          syntax: "typescript",
          dynamicImport: true,
          decorators: true,
        },
        target: "es2020",
        transform: {
          decoratorMetadata: true,
        },
      },
      module: {
        type: 'es6'
      },
    }),
  ],
});
