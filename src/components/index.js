import fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
const imagesFilePath = path.join(
  __dirname,
  "..",
  "..",
  "public",
  "images",
  "references",
);
console.log(imagesFilePath);
fs.readdir(imagesFilePath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return undefined;
  }
  const referenceImages = files.map((file) => "/images/references/" + file);
  console.log(referenceImages);
});
