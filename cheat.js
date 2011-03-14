

/*

thanks for reading this far. 

here is complete scummbag implementation.

let the opperating system do it.

please re-implement this fast with the same API ;)

*/


if(require.main == module){
  process.argv.shift()
  process.argv.shift()
  console.log(JSON.stringify({pwd: process.env.PWD, dirs: process.argv}))
  process.exit(0)
} else {
  var exec = require('child_process').exec

  exports.find = function (path,paths,cb){
//    console.log(arguments)
    if(!Array.isArray(paths))
      paths = [paths]
    var c = exec('node ' + __filename + " " + paths.join(' '), {cwd: path}, function (err,stdout){
      console.log(JSON.parse(stdout))

      if(err) cb (err)

      var data 
      try{ data = JSON.parse(stdout).dirs } catch (err) { cb(err) }
      
      cb(null,data)
      
    })
  }
}