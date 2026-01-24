document.addEventListener('DOMContentLoaded', () => {
    const switcherTheme = document.querySelector('[data-id="switch-theme"]'); //obtiene el input checkbox
    const htmlTag = document.documentElement; // obtiene la etiqueta html
    
    if (htmlTag.getAttribute('data-theme') === 'dark') { // si esta en dark pone el checked en true para q tenga un tema dark
        switcherTheme.checked = true;
    }

    switcherTheme.addEventListener('change', toggleTheme); // intercambia el tema

    function toggleTheme () {
        const newTheme = switcherTheme.checked ? 'dark' : 'light'; // pone en dark si el input esta checked

        htmlTag.setAttribute('data-theme', newTheme); // sobrescribe el data-theme del HTML

        // para q al recargar la pagina conserve las preferencias del usuario
        localStorage.setItem('theme', newTheme);
    }    
})