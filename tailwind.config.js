module.exports = {
    purge: [],
    theme: {
        extend: {
            transitionProperty: {
                spacing: 'margin, padding',
                navlink: 'margin, padding, border-color, color',
            },
            spacing: {
                '2px': '2px',
            },
        },
    },
    variants: {
        padding: ['responsive', 'hover'],
        margin: ['responsive', 'hover'],
    },
    plugins: [],
};
