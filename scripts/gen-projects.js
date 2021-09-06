const fs = require("fs");
const toSource = require('tosource')
process.chdir(__dirname);

function genProjects() {
  fs.readFile("../src/data/project-list.json", (err, data) => {

    const list = JSON.parse(data);

    fs.writeFileSync(
      `../src/data/projects.ts`,
      `export const Projects: Project[] = ${toSource(list)};`
    );
  })

}

genProjects();
