function Controller(){
    this.model = new Model(this);
}

Controller.prototype.areModel = function(){
    if (this.model == null){
        return false;
    }
    return true;
}

Controller.prototype.selectMode = function(mode){
    mode = mode || 1
    this.model.setOption(mode);//Seleccionar por boton
}

Controller.prototype.startAll = function() {
    this.model.exec(); // Ejecucion de algoritmo seleccionado
}

Controller.prototype.stopAll = function(){
    this.model.stop();
}
