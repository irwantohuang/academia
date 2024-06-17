/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '16px'
            }
        },
        fontFamily: {
            primary: "League Spartan",
            secondary: "Marcellus"
        },
        extend: {
            colors: {
                baseColor: {
                    DEFAULT: '#FDFCF1',
                    'secondary': '#283851'
                },
                accent: {
                    DEFAULT: '#CBE5E8',
                    'first': '#FFF1E7',
                    'second': '#C24444',
                }

            }
        },
    },
    plugins: [],
}