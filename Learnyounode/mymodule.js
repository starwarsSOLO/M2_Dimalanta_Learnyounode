const fs = require('fs')
const path = require('path')

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return callback(err) // early return if there is an error
    }

    // Filter the files based on the provided extension
    const filteredFiles = files.filter(file => path.extname(file) === '.' + ext)

    // Pass the filtered files to the callback function
    callback(null, filteredFiles)
  })
}