const fs = require("fs");

function getAssets(number, dir) {
  const queue = [];
  const files = fs.readdirSync(dir);

  while (queue.length < number) {
  }

  for (let i = 0; i < number; i++) {
    let name = dir + "/" + files[i];
    queue.push(name);
  }

  return queue;
}

module.exports = getAssets;
