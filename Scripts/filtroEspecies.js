const filtros = {
    tipo: document.getElementById('filtroTipo'),
    habitat: document.getElementById('filtroHabitat'),
    clima: document.getElementById('filtroClima'),
    color: document.getElementById('filtroColor'),
    floracion: document.getElementById('filtroFloracion')
};

Object.values(filtros).forEach(filtro => {
    filtro.addEventListener('input', aplicarFiltros);
});

function aplicarFiltros() {
    const cards = document.querySelectorAll('.row .col');

    cards.forEach(card => {
        const tipo = card.dataset.tipo.toLowerCase();
        const habitat = card.dataset.habitat.toLowerCase();
        const clima = card.dataset.clima.toLowerCase();
        const color = card.dataset.color.toLowerCase();
        const floracion = card.dataset.floracion.toLowerCase();

        const coincideTipo = !filtros.tipo.value || tipo.includes(filtros.tipo.value.toLowerCase());
        const coincideHabitat = !filtros.habitat.value || habitat.includes(filtros.habitat.value.toLowerCase());
        const coincideClima = !filtros.clima.value || clima.includes(filtros.clima.value.toLowerCase());
        const coincideColor = !filtros.color.value || color.includes(filtros.color.value.toLowerCase());
        const coincideFloracion = !filtros.floracion.value || floracion.includes(filtros.floracion.value.toLowerCase());

        if (coincideTipo && coincideHabitat && coincideClima && coincideColor && coincideFloracion) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const modalEspecie = document.getElementById('modalEspecie');
    const titulo = modalEspecie.querySelector('#modalEspecieLabel');
    const imagen = modalEspecie.querySelector('#modalImagen');
    const descripcion = modalEspecie.querySelector('#modalDescripcion');
    const tipo = modalEspecie.querySelector('#modalTipo');
    const habitat = modalEspecie.querySelector('#modalHabitat');
    const clima = modalEspecie.querySelector('#modalClima');
    const color = modalEspecie.querySelector('#modalColor');
    const floracion = modalEspecie.querySelector('#modalFloracion');

    document.querySelectorAll('.btn-vermas').forEach(btn => {
        btn.addEventListener('click', function () {
            titulo.textContent = this.getAttribute('data-titulo');
            imagen.src = this.getAttribute('data-imagen');
            descripcion.textContent = this.getAttribute('data-descripcion');
            tipo.textContent = this.getAttribute('data-tipo');
            habitat.textContent = this.getAttribute('data-habitat');
            clima.textContent = this.getAttribute('data-clima');
            color.textContent = this.getAttribute('data-color');
            floracion.textContent = this.getAttribute('data-floracion');
        });
    });
});

document.querySelectorAll('.img-container').forEach(container => {
    const img = container.querySelector('img');
    const overlay = container.querySelector('.nombre-overlay');
    const nombre = img.getAttribute('data-nombre');

    img.addEventListener('mouseenter', () => {
        overlay.textContent = nombre;
        overlay.style.display = 'block';
    });

    img.addEventListener('mouseleave', () => {
        overlay.style.display = 'none';
    });
});