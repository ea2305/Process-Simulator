function Controller(){
    this.model = null;
}
//view = new MasterView()// si llevara a generarse como objeto


Controller.prototype.selectMode = (mode)=>{
    this.models.setOption(1); //Seleccionamos el tipo de algoritmo, manual :c
}

Controller.prototype.startAll = ()=> {
    this.models = new Model();
    models.exec(); // Ejecucion de algoritmo seleccionado
}
