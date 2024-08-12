const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('API', {
    onUpdateTheme: (callback) => ipcRenderer.on('update-theme', callback),
    showDirectories: (callback) => ipcRenderer.on('show-directories', callback),
});
