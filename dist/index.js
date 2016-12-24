// 用于node测试
// 请求http版块
var http = require('http');
// 创建一个服务
var server = http.createServer(function(request, response) {
	// 查看每个人的请求地址
	console.log(request.url);
	// 处理请求
	response.writeHead(200, {
		'Content-Type': 'text/html', //告诉服务端你的是html
		'key1': 'value1'
	});
	response.write("<h1>hellow,world</h1>");
	// 回应结束
	response.end();
});
//监听这个服务
server.listen(8080, function(error) {
	console.log('成功监听');
		console.log('你已经就成功监听8080端口');
});