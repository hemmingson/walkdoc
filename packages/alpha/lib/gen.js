const fs = require('fs')
const path = require('path')

const MD_FOLDER_PATH = 'src/md'
const NEW_FILE_PATH = 'src/md/index.js'
const MD_FILE_SUFFIX = '.md'

const file = fs.existsSync(NEW_FILE_PATH)
  ? fs.WriteStream(NEW_FILE_PATH)
  : fs.createWriteStream(NEW_FILE_PATH)

const isMdFile = (file) => path.extname(file) === MD_FILE_SUFFIX

const _lineFeed = '\r\n'
const _modelDeclaration = 'const model = []' + _lineFeed
const _modelExportation = 'export default model'
let _importSrc = '',
  _addEl = ''

const fillModel = (md) => {
  const name = md.slice(0, -3)

  _importSrc += `import ${name} from '${'./' + md}'` + _lineFeed
  _addEl += `model.push({ title: '${name}', src: ${name} })` + _lineFeed
}

const scanFolder = () => {
  fs.readdirSync(MD_FOLDER_PATH).filter(isMdFile).forEach(fillModel)
}

const genCode = (...chunks) => {
  chunks.forEach((chunk) => file.write(chunk + _lineFeed))
}

/* ✍️ ... */
scanFolder()
genCode(_importSrc, _modelDeclaration, _addEl, _modelExportation)
