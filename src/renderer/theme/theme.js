export const updateTheme = (theme) => {
    const root = document.documentElement;
    console.log(theme);
    root.style.setProperty('--scheme', theme);
}

// module.exports = { updateTheme }