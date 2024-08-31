const fs = require("fs").promises;
const path = require("path");

async function readdir(rotDir) {
  rotDir = rotDir || path.resolve(__dirname);
  const files = await fs.readdir(rotDir);
  Walck(files, rotDir);
}
async function Walck(files, rotDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rotDir, file);
    const stats = await fs.stat(fileFullPath);

    if (/\.git/g.test(fileFullPath)) continue;
    if (/NODE/g.test(fileFullPath)) continue;

    if (stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }
    if (!/\.html$/g.test(fileFullPath)) {
      continue;
    }
    console.log(fileFullPath);
  }
}
readdir("C:\\Users\\kayky\\OneDrive\\Documentos\\Curso_jS\\Curso-JS\\");
