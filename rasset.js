const restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name + '\n\n');
  next();
}

const server = restify.createServer({name : "rasset"});

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
