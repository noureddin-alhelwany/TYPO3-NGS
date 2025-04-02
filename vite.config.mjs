import { defineConfig } from "vite";
import typo3 from "vite-plugin-typo3";
import tailwindcss from '@tailwindcss/vite'
import vuePlugin from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [typo3(), tailwindcss({
        config: {
            content: [
                "./packages/template/ContentBlocks/**/*.html",
                "./packages/template/Resources/**/*.{html,css,vue}",
            ],
        },
        safelist: [
            'bg-primary', 'bg-on-primary', 'bg-secondary', 'bg-on-secondary',
            'text-primary', 'text-on-primary', 'text-secondary', 'text-on-secondary',
            'border-primary', 'border-on-primary', 'border-secondary', 'border-on-secondary',
        ],
    }), vuePlugin()],
    define: {
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_OPTIONS_API__: 'true'
    }
});