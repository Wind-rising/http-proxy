// 导入http模块
var http = require('http');
// 导入http-proxy模块
var httpProxy = require('http-proxy');

// 提供服务的端口号
var PORT = 1234;

// 创建反向代理服务
var proxy = httpProxy.createProxyServer({changeOrigin: true});
// 监听错误事件
proxy.on('error', function (err, req, res) {
    // 输出空白响应数据
    res.write('error!');
    res.end();
});

// 创建服务
var app = http.createServer(function (req, res) {
    // 执行反向代理
    console.log(req,res)
    proxy.web(req, res, {
        // 目标地址
        target: 'http://cc-mircq-xpt.iwgame.com'
    });
});

// 启动服务
app.listen(PORT, function () {
    console.log('server is running at %d', PORT);
});