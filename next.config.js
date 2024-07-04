const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    config.resolve.alias["src"] = path.join(__dirname, "src");
    return config;
  },
};
