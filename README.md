#Wildfile#

    require('wildfile').find(__dirname,'../*/*.js',function (err,paths){
      console.log(paths)
    })

stdout:

    [ '../color/error.js',
    '../color/example.js',
    '../color/index.js',
    '../color/style.js',
    '../couches/add.js',
    '../couches/aggregator.js',
    '../couches/client.js',
    '../couches/couch-listener.js',
    '../couches/generate.js',
    '../couches/hash.js',
    '../couches/load.js',
    '../couches/model.platform.synct.js',
    '../couches/model.trial.synct.js',
    '../couches/platforms.js',
    '../couches/proxy.js',
    '../couches/server.js',
    '../couches/supervisor.js',
    '../couches/view.js',
    '../cradle-model/index.js',
    '../cradle-model/odm.js',
    '../ctrlflow/ctrlflow.js',
    '../ctrlflow/index.js',
    '../curry/curry.js',
    '../curry/index.js',


... and so on, just like you do on the command line.
