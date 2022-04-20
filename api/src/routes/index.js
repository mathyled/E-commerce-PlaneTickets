const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file);

  if (name !== "index") {
    console.log(`Loading **${name}** route `);
    router.use(`/${name}`, require(`./${file}`));
  }
});

module.exports = router;
