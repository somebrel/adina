import fs from "fs";
import { pickRandomFromArray, isFunction } from "./utils.js";

export default function(number, path = "assets", modifierPath) {
  if (number == null || path == null) return null;

  const files = [];
  const filesName = fs.readdirSync(path);
  const randomFilesName = pickRandomFromArray(filesName, number);

  randomFilesName.forEach(fileName => {
    let file = fs.readFileSync(`${path}/${fileName}`, "utf8");

    if (modifierPath) {
      const modifier = require(modifierPath);
      if (isFunction(modifier)) file = modifier(file);
    }

    files.push(file);
  });

  return files;
}
