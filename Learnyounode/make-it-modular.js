const mymodule = require('./mymodule.js') // Import the module

const dir = process.argv[2] // First command-line argument: directory
const ext = process.argv[3] // Second command-line argument: file extension

mymodule(dir, ext, (err, files) => {
  if (err) {
    return console.error('There was an error:', err)
  }

  // Print the filtered files
  files.forEach(file => {
    console.log(file)
  })
})