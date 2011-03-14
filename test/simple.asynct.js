
var wild = require('wildfile')
  , it = require('it-is')
  , ctrl = require('ctrlflow')
  , path = require('path')

 
exports ['expand simple'] = function (test){
  wild.find(__dirname,['simple.asynct.js'],function (err,paths){
    it(err).equal(null)
    it(paths)
      .deepEqual([
        'simple.asynct.js'
      ])
    test.done()  
  })
}

exports ['expand *'] = function (test){
  wild.find(__dirname,['*'],function (err,paths){
    it(err).equal(null)
    it(paths)
      .has([
        'examples'
      , 'simple.asynct.js'
      ])
    test.done()  
  })
}

function expand(args){
  return function (){
    var next = this.next
    wild.find.call(null,args[0],args[1],function (err,paths){
      it(err).equal(null)
      console.log(paths)
      it(paths.filter(function (e){
        return -1 != args[2].indexOf(e)
      }).sort()).deepEqual(args[2].sort())
      next()
    })
  }
}

exports ['expand lots'] = function (test){
  var paths = [
    [__dirname, '*', ['examples', 'simple.asynct.js']]
  , [__dirname, '../*', ['../package.json','../wildfile.js', '../index.js']]
  , [path.join(__dirname,'examples'), '*', ['dir','dir2']]
  , [path.join(__dirname,'..'), 'test/examples/*/*'
    , 'test/examples/dir2/asdf.txt test/examples/dir/asdf.txt test/examples/dir/hello.txt'.split(' ')]
  ].map(expand)

  ctrl.seq(paths.concat(test.done))()
}