const { app, BrowserWindow } = require('electron');

if (process.env.NODE_ENV === 'development') {
    require('electron-reload')(__dirname);
}

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 322,
        height: 504,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // and load the index.html of the app.
    win.loadFile('./app/settings.html');
}

app.on('ready', createWindow);
app.on('window-all-closed, will-quit, quit', function() {
    app.quit();
});
