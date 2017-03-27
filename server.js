const restify = require("restify");
const getAssets = require("./lib/adina").getAssets;

const server = restify.createServer({ name: "rasset" });
server.pre(restify.pre.userAgentConnection());
server.use(restify.queryParser({ mapParams: false }));

const config = { assets: { dir: "ostia", number: 1 } };

function sendAssetsQueue(req, res, next) {
  const assetsNumber = req.params.number
    ? req.params.number
    : config.assets.number;
  const assetsDir = req.query.from
    ? "./" + req.query.from
    : "./" + config.assets.dir;

  const queue = getAssets(assetsNumber, assetsDir);
  res.send(queue);
}
// example localhost:8080/get/7?from=assets
server.get("/get/:number", sendAssetsQueue);

server.listen(8080, "localhost", function() {
  console.log("\n# %s listening at %s", server.name, server.url);
});
