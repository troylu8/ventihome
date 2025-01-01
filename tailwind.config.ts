import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                foreground: "var(--foreground)",
                accent: "var(--accent)",
                background1: "var(--background1)",
                background2: "var(--background2)",
                background3: "var(--background3)",
            },
        },
    },
    plugins: [],
    corePlugins: {preflight: false}
} satisfies Config;
