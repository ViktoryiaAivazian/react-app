module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-preset-env': {}, // support new CSS4
        'autoprefixer': {browsers: ['last 2 versions', '> 1%'] },
        'postcss-nested':{}, // for nested rules
        'cssnano': {}, // clean css code, remove the same code
    }
};