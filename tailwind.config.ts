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
                background: "var(--background)",
                backgrounddark: "var(--background-dark)",
                foreground: "var(--foreground)",
                foregroundlight: "var(--foreground-light)",
                accent1: "var(--accent1)",
                accent2: "var(--accent2)",
            },
        },
    },
    plugins: [],
    corePlugins: {preflight: false}
} satisfies Config;
