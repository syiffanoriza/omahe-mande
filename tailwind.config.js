/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./node_modules/flowbite/**/*.js",
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: 'Lato',
                poppins: 'Poppins'
            },
            colors: {
                backdrop: '#EEEBE6',
                omahe: '#CC9932',
                primary: {
                    '900': '#A39068',
                    '800': '#AC9B77',
                    '700': '#B5A686',
                    '600': '#BFB296',
                    '500': '#C8BCA4',
                    '400': '#D1C7B3',
                    '300': '#DAD3C3',
                    '200': '#E4DED2',
                    '100': '#EDE9E1',
                    '50': '#F6F4F0',
                },
                typography: {
                    '900': '#412510',
                    '800': '#543B28',
                    '700': '#675140',
                    '600': '#7A6758',
                    '500': '#8D7C70',
                    '400': '#A09287',
                    '300': '#B3A89F',
                    '200': '#C6BEB8',
                    '100': '#D9D3CF',
                    '50': '#ECEAE8',
                },
                footer: {
                    'from': '#F3BC65',
                    'to': '#D5912A',
                },
                airbnb: '#FF385C',
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
        require('flowbite/plugin'),
    ],
};
