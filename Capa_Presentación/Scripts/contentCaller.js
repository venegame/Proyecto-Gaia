window.addEventListener('DOMContentLoaded', () => {
    fetch('/Shared/Nav.html')
        .then(res => res.text())
        .then(html => {
            const container = document.getElementById('navbar');
            container.innerHTML = html;

            // Ejecutar scripts del nav
            const scripts = container.querySelectorAll('script');
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                if (oldScript.src) {
                    newScript.src = oldScript.src;
                    newScript.async = oldScript.async;
                    // Para scripts externos espera a que carguen para ejecutar widget si es darkmode.exec.js
                    newScript.onload = () => {
                        if (oldScript.src.includes('Darkmode.exec.js')) {
                            // Ejecuta la función directamente aquí para asegurar que se corra
                            if (typeof addDarkmodeWidget === 'function') addDarkmodeWidget();
                        }
                    }
                } else {
                    newScript.textContent = oldScript.textContent;
                }
                document.head.appendChild(newScript);
            });
        });

    fetch('/Shared/Footer.html')
        .then(res => res.text())
        .then(html => {
            const container = document.getElementById('footer');
            container.innerHTML = html;

            const scripts = container.querySelectorAll('script');
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                if (oldScript.src) {
                    newScript.src = oldScript.src;
                    newScript.async = oldScript.async;
                } else {
                    newScript.textContent = oldScript.textContent;
                }
                document.body.appendChild(newScript);
            });
        });
});
