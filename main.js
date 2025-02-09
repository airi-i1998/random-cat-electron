const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  mainWindow.loadURL('http://localhost:3000')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if(BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.handle("fetch-cat", async () => {
  console.log("Fetch cat image...")
  return await fetchCatImage()
})

const fetchCatImage = async () => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search')
  const data = await res.json()
  console.log({ data })
  return data[0].url
}