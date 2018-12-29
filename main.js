
const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  mainWin = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  mainWin.loadFile('index.html')
}

app.on('ready', createWindow)