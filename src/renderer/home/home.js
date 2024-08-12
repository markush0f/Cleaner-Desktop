const divDirectories = document.getElementById('divDirectories');
divDirectories.innerHTML = '';

export function loadDirectories(directories) {
    const divDirectories = document.getElementById('divDirectories');
    
    directories.forEach((dir, index) => {
        const div = document.createElement('div');
        div.textContent = dir;
        divDirectories.appendChild(div);
    });
}

