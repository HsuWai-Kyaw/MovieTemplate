/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,css}"],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Source Sans 3', 'sans-serif'],
        },
        colors: {
            body: '#09363c',
            primary: '#ff0000',
            sky: '#DFF9FF',
            cyan: '#5DE2E7',
            yellow: '#FFECA1',
            gray: '#E2EAF4',
            lime: '#bfe1a1',
            teal: '#09a78a',
            amber: '#ffe997',

        },
        plugins: [],
    }
}