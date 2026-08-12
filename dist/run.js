// src/logger.ts
var import_consola = require("consola");
var logger = (0, import_consola.createConsola)({});

// src/index.ts
async function run() {
  const projectName = await logger.prompt("Project name?", {
    type: "text"
  });
  logger.log(projectName);
}

// bin/run.ts
run();
