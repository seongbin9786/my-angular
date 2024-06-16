import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/**
 * @summary ignore 대상 폴더/파일을 명시합니다.
 * @see https://eslint.org/docs/latest/use/configure/ignore
 */
const myCustomConfig = {
  ignores: [
    "**/dist/**/*",
    "**/.rollup.cache/**/*",
    "**/*.js", // FIXING: 기타 설정 파일들이
  ],
};

/**
 * @summary ESLint VSCode Extension을 사용하기 위해 config를 루트에 두고, 개별적인 폴더 범위로 설정합니다.
 * @description TypeScript-ESLint의 새로운 설정 형식을 사용합니다.
 * @see https://typescript-eslint.io/getting-started
 * @remarks type-checked를 쓰려고 하면 오류가 나서 일단 유보합니다.
 * */
export default tseslint.config(
  myCustomConfig,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    // TODO: 없어도 잘 되는 것 같아서 확인 필요
    // NEEDS: TypeScript-ESLint config for monorepo. (https://typescript-eslint.io/getting-started/typed-linting/monorepos/#one-tsconfigjson-per-package-and-an-optional-one-in-the-root)
    languageOptions: {
      parserOptions: {
        project: ["./packages/*/tsconfig.json"], // NOTE: A path to your project's TSConfig. (https://typescript-eslint.io/packages/parser/#project)
        tsconfigRootDir: import.meta.dirname, // NOTE: if ESM, only supported in Node.js >=20.11.0 / >= 21.2.0 (https://typescript-eslint.io/getting-started/typed-linting/)
      },
    },
  },
  eslintPluginPrettierRecommended
);
