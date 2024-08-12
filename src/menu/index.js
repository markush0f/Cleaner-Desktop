import { app, Menu } from 'electron';

export const setMainMenu = (mainWindow) => {
    const template = [
        {
            label: app.getName()[0].toUpperCase() + app.getName().slice(1),
            submenu: [
                {
                    label: 'Quit',
                    click: () => {
                        app.quit();
                    }
                },
                { role: 'about' },
                { type: 'separator' },
                { role: 'services' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'unhide' },
                { type: 'separator' },
            ]
        },
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { role: 'toggleDevTools' },
                { type: 'separator' },
                { role: 'resetZoom' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        },
        {
            label: 'Themes',
            submenu: [
                {
                    label: 'Light Mode',
                    click: () => {
                        mainWindow.webContents.send('update-theme', 'light');
                    }
                },
                {
                    label: 'Dark Mode',
                    click: () => {
                        mainWindow.webContents.send('update-theme', 'dark ');
                    }
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
};

// module.exports = { setMainMenu };
