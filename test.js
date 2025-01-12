// file: test.js

const path = require("node:path");
const { Logger, LogConfig } = require("./index");

async function initialize_logger() {
  let logger = Logger.with_config(
    LogConfig.from_file(path.join(__dirname, "config.json"))
  );
  await logger.init();

  return logger;
}

async function main() {
  const logger = await initialize_logger();
  setInterval(() => {
    logger.critical("This is critical");
  }, 20);
  logger.critical("From the main() function");
  nested_func(logger);
}

function nested_func(logger) {
  logger.critical("From the nested_func() function");
  super_nested(logger);
}

function super_nested(logger) {
  logger.critical("From the super_nested() function");
}

main();
