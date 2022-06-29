import http, { IncomingMessage, ServerResponse } from "node:http";

import { log } from "@core/example";

const requestListener = function (req: IncomingMessage, res: ServerResponse) {
  res.writeHead(200);
  log("Hello");
  res.end("Hello, World!");
};

const server = http.createServer(requestListener);
server.listen(8080);
