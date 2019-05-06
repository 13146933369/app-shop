module.exports = {
    baseUrl: process.env.NODE_ENV === "production" ? "./" : "/",
    devServer: {
        proxy: {
            // 配置跨域
            "/apis": {
                target: "http://39.106.104.186",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/apis": ""
                }
            }
        }
    }
};
console.log(process.env.NODE_ENV);