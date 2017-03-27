import fs from "fs";
import { pickRandomFromArray } from "./utils.js";

export default function(number, path = "assets") {
  if (number == null || path == null) return null;

  const files = [];
  const filesName = fs.readdirSync(path);
  const randomFilesName = pickRandomFromArray(filesName, number);

  randomFilesName.forEach(fileName => {
    files.push(fs.readFileSync(`${path}/${fileName}`, "utf8"));
  });

  return files;
}
