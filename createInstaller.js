var packager = require('electron-packager');
var options = {
    'dir':             '.',
    'name':            'My App',
    'arch':            'ia32',
    'overwrite':       true,
    'out':             './installers'
};
packager(options, function done_callback (err) {
	process.exit();
});