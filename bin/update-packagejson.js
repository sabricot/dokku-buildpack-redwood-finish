const fs = require('fs')

const packageJson = fs.readFileSync(process.argv[2], 'utf8')
const package = JSON.parse(packageJson)

package.dependencies = package.dependencies || {}

const coreVersion = package.devDependencies["@redwoodjs/core"]

if (coreVersion !== undefined && coreVersion.length > 0) {
  delete package.devDependencies["@redwoodjs/core"]
  package.dependencies["@redwoodjs/core"] = coreVersion
}

if (!package.dependencies.pm2) {
  package.dependencie.pm2 = "^4.5.5"
}

fs.writeFileSync(process.argv[2], JSON.stringify(package, null, 2))