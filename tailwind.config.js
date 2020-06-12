module.exports = {
    purge: [],
    theme: {
        extend: {
            transitionProperty: {
                navlink: 'margin, padding, border-color, color',
            },
        },
    },
    variants: {
        padding: ['responsive', 'hover'],
        margin: ['responsive', 'hover'],
    },
    plugins: [],
};
