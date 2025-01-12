const fs_sync = require("node:fs");
const path = require("path");

function check_and_create_dir(dir_path) {
  const log_dir = path.resolve(require.main.path, dir_path);
  if (!fs_sync.existsSync(log_dir)) {
    fs_sync.mkdirSync(log_dir, { recursive: true });
  }
  return log_dir;
}

function get_caller_info() {
  const error = {};
  Error.captureStackTrace(error);

  const caller_frame = error.stack.split("\n")[5];

  const meta_data = caller_frame.split("at ").pop();
  return meta_data;
}

module.exports = {
  check_and_create_dir,
  get_caller_info, // Add this!
};
