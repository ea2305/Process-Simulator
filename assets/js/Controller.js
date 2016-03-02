function Controller(){
    //
    //this.model = null;
    this.model = new Model();
}
//view = new MasterView()// si llevara a generarse como objeto

Controller.prototype.areModel = function(){
    if (this.model == null){
        return false;
    }
    return true;
}

Controller.prototype.selectMode = function(mode){
    mode = mode || 1
    this.model.setOption(mode); //Seleccionamos el tipo de algoritmo, manual :c
}

Controller.prototype.startAll = function() {
    console.log(this.model);
    this.model.exec(); // Ejecucion de algoritmo seleccionado
}
