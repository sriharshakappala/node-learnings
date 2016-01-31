function Watcher(watchDir, processDir) {
  this.watchDir = watchDir;
  this.processDir = processDir;
}

var events = require('events'), util = require('util');
util.inherits(Watcher, events.EventEmitter);

var fs = require('fs'), watchDir = './watch', processDir = './done';

Watcher.prototype.watch = function() {
  var watcher = this;
  fs.readdir(this.watchDir, function(err, files) {
    if(err) throw err;
    for (var index in files) {
      watcher.emit('process', files[index]);
    }
  })
}

Watcher.prototype.start = function() {
  var watcher = this;
  fs.watchFile(watchDir, function() {
    watcher.watch();
  });
}
