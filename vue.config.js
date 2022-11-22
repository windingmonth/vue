module.exports = {
    publicPath: process.env.NODE_ENV === 'vue'
    //Vue3配置axios跨域
    devServer: {
        proxy: {
            '/api': {
                target: 'http://apis.juhe.cn/', //接口域名
                changeOrigin: true,             //是否跨域
                ws: true,                       //是否代理 websockets
                secure: true,                   //是否https接口
                pathRewrite: {                  //路径重置
                    '^/api': ''
                }
            }
        }
    }
};
