import $ from 'jquery'

var proggresCompleted = 0;
const totalProgreso = 2;

export const actualizarAvance = () => {
    const barraAvance = document.getElementById('barra-avance')
    
    if (proggresCompleted < 2) {
        proggresCompleted++
        const avance = Math.round((proggresCompleted / totalProgreso) * 100)
        barraAvance.style.width = `${avance}%`
    }

    return (proggresCompleted)
}

export const cancelarAvance = () => {
    const barraAvance = document.getElementById('barra-avance')
    barraAvance.style.width = "0"
    proggresCompleted=0
}

export const ocultarModal = () => {
    const btnClose = document.getElementById('button-close-modal')
    const formAgregar = document.getElementById('form-agregar')
    if (btnClose && formAgregar) {
        btnClose.click()
        formAgregar.reset()
    }
}

export const limpiarInputCostoMensualidad = () => {
    const inputPrecioP = document.getElementById('costo-mensualidad-publico')
    const inputPrecioC = document.getElementById('costo-mensualidad-corporativo')
    const fecha = Array.from(document.querySelectorAll('.fecha-v'))

    fecha.map(item => {
        item.value = ''
    })
    
    inputPrecioP.value = ''
    inputPrecioC.value = ''

}

export const redirigir = (idCurso) => {
    // useHistory().push(`/cursos/${idCurso}`)
} 

export const seleccionarFila = () => {
    $("tbody").delegate("tr", "click", function() {
      var element = $(this);
      return(element[0].childNodes[0].textContent);
    });
}