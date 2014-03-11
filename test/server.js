var sql = require('..');
var connectionString = "";
var testQuery = "SELECT 1";

if(!connectionString) {
	console.log("This script cannot run without a connection string");
	return;
}

var http = require('http');
var port = process.env.PORT || 1337;
var httpServer = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write("node " + process.version + " " + process.arch + ".\n");

	sql.query(connectionString, testQuery, function(err, result) {
		if(err)
			res.end("Query Failed \n" + err);
		else
			res.end("Query result: " + result[0]['Column0'] + " \n");
	});
});

httpServer.listen(port);
console.log('Server running at localhost:'+port);
