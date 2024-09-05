import type {Config} from 'tailwindcss'
import {fontFamily} from 'tailwindcss/defaultTheme'

const config: Config = {
    content: ['./src/**/*.{ts,tsx}'],

    theme: {
        container: {
            center: true,
            padding: '1.5rem',
            screens: {'2xl': '1280px'},
        },

        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', ...fontFamily.sans],
            },
        },
    },

    plugins: [],
}

export default config
