const fs = require('fs')

const packageJson = fs.readFileSync(process.argv[2], 'utf8')
const package = JSON.parse(packageJson)

const apiVersion = package.dependencies["@redwoodjs/api"]

if (!package.dependencies["@redwoodjs/api-server"]) {
  package.dependencies["@redwoodjs/api-server"] = apiVersion
}

fs.writeFileSync(process.argv[2], JSON.stringify(package, null, 2))