/**
 * Created by luomw on 2014/9/29.
 */

var http = require("http");

http.createServer(function (request,response) {
    response.writeHeader(200,"Content-Type","text/plain");
    response.write("Hello World !");
    response.end();
}).listen(8888);
