module.exports = {
    purge: [],
    theme: {
        extend: {
            transitionProperty: {
                spacing: 'margin, padding',
                navlink: 'margin, padding, border-color, color',
            },
        },
    },
    variants: {
        // I can maybe remove the focus ones on these
        padding: ['responsive', 'hover', 'focus'],
        margin: ['responsive', 'hover', 'focus'],
    },
    plugins: [],
};
