window.onload = () => {
    console.log('todo cargado');

    models = new Model
    models.setOption(1) //Seleccionamos el tipo de algoritmo, manual :c
    models.exec() // Ejecucion de algoritmo seleccionado
}
