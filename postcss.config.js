module.exports = {
    plugins: {
        autoprefixer: {
            //不需要配置，直接在.browserslistrc已经做好了设置
            // browsers: ['Android >= 4.0', 'iOS >= 8'],
        },
        'postcss-pxtorem': {
            //转换的基准值 1rem=37.5px
            rootValue: 37.5,
            propList: ['*'],
        },
    },
};