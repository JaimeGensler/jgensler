const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withMdxEnhanced({
    layoutPath: 'components/Blog',
    defaultLayout: true,
    remarkPlugins: [],
    rehypePlugins: [],
})({
    distDir: 'build',
});
