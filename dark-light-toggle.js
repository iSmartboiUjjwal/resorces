(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        body {
            background-color: white;
            color: black;
            transition: background-color 0.5s, color 0.5s;
        }
        body.dark-mode {
            background-color: black;
            color: white;
        }

        .dark-light-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            cursor: pointer;
            font-size: 2rem;
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(8px);
            transition: background 0.3s, transform 0.3s;
        }
        .dark-light-toggle:hover {
            transform: scale(1.1);
        }

        .dark-light-toggle ion-icon {
            position: absolute;
            transition: opacity 0.4s, transform 0.4s;
        }
        .dark-light-toggle .sun {
            opacity: 1;
            transform: rotate(0deg);
        }
        body.dark-mode .sun {
            opacity: 0;
            transform: rotate(180deg);
        }
        .dark-light-toggle .moon {
            opacity: 0;
            transform: rotate(-180deg);
        }
        body.dark-mode .moon {
            opacity: 1;
            transform: rotate(0deg);
        }
    `;
    document.head.appendChild(style);

    const toggleButton = document.createElement('label');
    toggleButton.classList.add('dark-light-toggle');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.hidden = true;
    checkbox.id = 'dark-light-toggle-checkbox';

    const moonIcon = document.createElement('ion-icon');
    moonIcon.name = 'moon';
    moonIcon.classList.add('moon');

    const sunIcon = document.createElement('ion-icon');
    sunIcon.name = 'sunny';
    sunIcon.classList.add('sun');

    toggleButton.appendChild(checkbox);
    toggleButton.appendChild(moonIcon);
    toggleButton.appendChild(sunIcon);
    document.body.appendChild(toggleButton);

    if (!document.querySelector('script[src*="ionicons"]')) {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
        document.head.appendChild(script);

        const noModuleScript = document.createElement('script');
        noModuleScript.nomodule = true;
        noModuleScript.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
        document.head.appendChild(noModuleScript);
    }

    checkbox.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
})();
