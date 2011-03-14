require('wildfile').find(__dirname,'../*/*.js',function (err,paths){
    console.log(paths)
  })