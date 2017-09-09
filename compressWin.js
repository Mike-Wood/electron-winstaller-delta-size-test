var path = require('path');

function compressWin () {
    console.log("Compressing into a .exe\n");
    var resultPromise = require('electron-winstaller').createWindowsInstaller({
        appDirectory:    './installers/My App-win32-ia32',
        outputDirectory: path.join(__dirname, 'installers', 'win'),
        exe:             'My App.exe',
        setupExe:        'MyApp-windows.exe',
        noMsi:           true
    });

    resultPromise.then(function () {
        console.log("Installer created");
        process.exit();
    }, function (err) {
        console.log(err);
        process.exit();
    });
}

compressWin();