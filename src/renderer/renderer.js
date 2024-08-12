import { updateTheme } from './theme/theme.js';
import { loadDirectories } from './home/home.js';
console.log('renderer loaded');

const directories = [
    'Documents',
    'Downloads',
    'Music',
    'Pictures',
    'Videos',
    'Desktop',
    'Programs',
    'Applications'
]

loadDirectories(directories)
window.API.onUpdateTheme((event, theme) => {
    console.log(theme);
    updateTheme(theme);
})