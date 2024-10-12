/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.html'],
    theme: {
        extend: {
            colors: {
                lightHeader: '#fff',
                lightBody: 'rgba(250, 250, 250, 1)',
                lightText: 'rgba(17, 21, 23, 1)',
                lightTextSlate: 'rgba(132, 132, 132, 1)',
            }
        },
    },
    plugins: [],
}

