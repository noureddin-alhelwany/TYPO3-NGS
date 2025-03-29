import { defineConfig } from "vite";
import typo3 from "vite-plugin-typo3";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [typo3(), tailwindcss()],
    define: {
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_OPTIONS_API__: 'true'
    }
});