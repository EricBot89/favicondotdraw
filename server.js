const http = require("http");
const app = require("./index");
const models = require("./models");
const server = http.createServer(app);

const port = 8080;

const init = async () => {
  await models.Favicon.sync();
  server.listen(port, () => {
    console.log(`I am a server, hi. I can hear things on port ${port}`);
  });
}

init();
