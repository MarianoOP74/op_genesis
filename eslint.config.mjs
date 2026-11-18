import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const config = [
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Static export with pre-generated WebP variants; next/image optimization is disabled.
      "@next/next/no-img-element": "off"
    }
  },
  { ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"] }
];

export default config;
