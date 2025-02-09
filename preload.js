const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  fetchCat: () => ipcRenderer.invoke('fetch-cat')
})