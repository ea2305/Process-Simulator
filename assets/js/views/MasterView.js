
window.onload = () => {

    myController = new Controller; //iniciamos el controlador

    var btn_state = null;//Estado del boton

    //Cambia el color del boton al ser seleccionado
    var changeColor = (e)=>{
        //Obtenemos generador del evento
        var element = $(e)[0].target.id

        btn_state = false;//Reiniciamos el valor
        btn_state = (element == "button-start") ? true : false; //Seteamos valores
        setColor(element,btn_state) //Colocamos estado de seleccionado
        if (btn_state) {
            myController.startAll();
        } else {
            //stopSimulation();
        }
    }

    var setColor = (element,state)=>{
        var clean = (state)? ["red","button-stop"] : ["cyan","button-start"];
        //Limpiamos valores
        $("#" + clean[1]).style("color","white")
        $("#" + clean[1]).style("border-color","white")
        //Cambio de color al seleccionar
        $("#" + element).style("color",clean[0])
        $("#" + element).style("border-color",clean[0])
    }

    //Set controler
    function setViewController(element){
        console.log("controller seteado");
        controller = element
    }

    function selectAlgoritm(event){
        //Obtenemos padre del evento, y obtenemos el indice del algoritmo
        var option = $(event.target)[0].id.split("").pop()
        //Enviamos valores
        myController.selectMode(option)
    }

    var Box = function(app,settings){

        var center = app.center
        var increment = 80;

        console.log(center);
        app.set({color : 'black'})

        //Fondo blanco
        app.add( new iio.Quad(
            {
                pos : [center.x,center.y - 300],
                width: 80,
                color : 'gray'
            }
        ))
        //Borde
        app.add( new iio.Quad(
            {
                pos : [center.x,center.y - 300],
                width: 60,
                color : 'white'
            }
        ))

        //Cola de preparados
        //Fondo rojo
        app.add( new iio.Quad(
            {
                pos : [70,center.y - 300],
                width: 100,
                height : 600,
                color : 'red'
            }
        ))
        //fondo negro tuberia
        app.add( new iio.Quad(
            {
                pos : [70,center.y - 300],
                width: 80,
                height : 600,
                color : 'black'
            }
        ))

        //Cola de preparados
        //Fondo azul
        app.add( new iio.Quad(
            {
                pos : [1200,center.y - 300],
                width: 100,
                height : 600,
                color : 'blue'
            }
        ))
        //fondo negro tuberia
        app.add( new iio.Quad(
            {
                pos : [1200,center.y - 300],
                width: 80,
                height : 600,
                color : 'black'
            }
        ))

        //Generador de procesos :v
        for (var i = 0; i < 5; i++) {
            app.add( new iio.Ellipse(
                {
                    pos : [70,(increment * i)],
                    radius : 30,
                    color : 'white'
                }
            ))
        }
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
