import tseslint from "typescript-eslint";

/**
 * @summary ignore 대상 폴더/파일을 명시합니다.
 * @see https://eslint.org/docs/latest/use/configure/ignore
 */
const myCustomConfig = {
  ignores: ["**/dist/**/*", "**/.rollup.cache/**/*"],
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
  ...tseslint.configs.stylistic
);
