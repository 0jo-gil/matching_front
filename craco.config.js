const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@api": path.resolve(__dirname, "src/common/api"),
      "@hooks": path.resolve(__dirname, "src/common/hooks"),
      "@utils": path.resolve(__dirname, "src/common/utils"),
      "@components": path.resolve(__dirname, "src/components"),
      "@page": path.resolve(__dirname, "src/page"),
      "@styled": path.resolve(__dirname, "src/common/styled"),
      "@store": path.resolve(__dirname, "src/store"),
    },
  },
};
