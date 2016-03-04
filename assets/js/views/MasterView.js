
window.onload = () => {

    //iniciamos el controlador
    myController = new Controller(this);
    //Estado del boton
    var btn_state = null;

    //Cambia el color del boton al ser seleccionado
    var changeColor = (e)=>{
        //Obtenemos generador del evento
        var element = $(e)[0].target.id

        btn_state = false;//Reiniciamos el valor
        btn_state = (element == "button-start") ? true : false; //Seteamos valores
        setColor(element,btn_state) //Colocamos estado de seleccionado
        if (btn_state) {
            myController.startAll();
            console.log(myController.model.method.complete);
        } else {
            stopSimulation();
        }
    }

    var setColor = (element,state)=>{
        var clean = (state)? ["red","button-stop"] : ["cyan","button-start"];
        //Limpiamos valores
        $("#" + clean[1]).css("color","white")
        $("#" + clean[1]).css("border-color","white")
        //Cambio de color al seleccionar
        $("#" + element).css("color",clean[0])
        $("#" + element).css("border-color",clean[0])
    }

    //Set controler
    function setViewController(element){
        console.log("controller seteado");
        controller = element
    }

    function selectAlgoritm(event){
        console.log(event);
        //Obtenemos padre del evento, y obtenemos el indice del algoritmo
        var option = event.target.id.split("").pop()
        //Enviamos valores
        myController.selectMode(option)
    }

    function stopSimulation() {
      var data =   "<thead><tr><td>Proceso #</td><td>Tiempo de llegada</td>"+
                  "<td>Tiempo requerido</td><td>Tiempo en espera</td><td>Tiempo de Respuesta</td>"+
                  "<td>Tiempo de penalización</td></tr></thead>";
        var sumaprocesos=0;
        data+="<tbody>";

        this.myController.model.method.complete.queue.forEach(function(entry) {
            
        });

        this.myController.model.method.complete.queue.forEach(function(entry) {
            data += "<tr><td>"+entry.name+"</td>";
            data += "<td>"+(sumaprocesos-entry.waitTime)+"</td>";
            sumaprocesos+=entry.workingTime;
            data += "<td>"+entry.workingTime+"</td>";
            data += "<td>"+entry.waitTime+"</td></tr>";
        });
        data+="</tbody>";

      document.getElementById("datos").innerHTML = data;

    }

/*
    Modelado de la interfaz en cavas.
    Principales metodos y objetos.
    * Configuracion de tuberias
    * Configuracion de Pelotas
    * Configuracion de Caja
*/
    //Medidas genericas para tuberias
    var pipeW = 60
    var pipeH = 200
    var pipeL = 10

    //Medidas genericas para cajas
    var rectW = 70
    var rectH = 70
    var rectL = 10

    //Medidas para pelota : proceso
    var ballR = 30

    //Generador de tuberias
    var pipeConf = function(color,position){
        return (
            [
                {//Objeto maestro
                    pos : position,
                    width: pipeW,
                    height : pipeH,
                    color : color
                },{//Objeto esclavo :c
                    pos : position,
                    width: pipeW - pipeL,
                    height : pipeH,
                    color : 'black'
                }
            ]
        )
    }

    var rectConf = function(color,position){
        return (
            [
                {//Objeto maestro
                    pos : position,
                    width: rectW,
                    height : rectH,
                    color : color
                },{
                    pos : position,
                    width: rectW - rectL,
                    height : rectH - rectL,
                    color : 'black'
                }
            ]
        )
    }

    var ballConf = function(text,color,position){
        return (
            [
                {
                    pos : position,
                    radius : ballR,
                    color : color
                }
            ]
        )
    }

    //Creacion de animacion
    var Box = function(app,settings){
        var increment = 80;

        app.set({color : 'black'})

        //Creacion de caja Tiempo en CPU
        rectConf('white',[650,300]).forEach(function(component){
            console.log(component);
            app.add( new iio.Quad(component))
        })

        //Creacion de tuberia Roja : Cola de preparados
        pipeConf('red',[50,50]).forEach(function(component){
            app.add( new iio.Quad(component));
        })

        //Cola de preparados
        pipeConf('blue',[1200,50]).forEach(function(component){
            app.add( new iio.Quad(component));
        })

    }

    // start the app fullscreen
    iio.start( Box );

    //Handlers
    $('#button-start').click(changeColor)
    $('#button-stop').click(changeColor)

    //Botones de Algoritmos
    $('#option_1').click(selectAlgoritm)
    $('#option_2').click(selectAlgoritm)
    $('#option_3').click(selectAlgoritm)
    $('#option_4').click(selectAlgoritm)
    $('#option_5').click(selectAlgoritm)
    $('#option_6').click(selectAlgoritm)
}
