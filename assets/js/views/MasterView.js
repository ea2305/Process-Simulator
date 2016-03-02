window.onload = ()=>{

    myController = new Controller; //iniciamos el controlador

    var btn_state = null;//Estado del boton

    //Cambia el color del boton al ser seleccionado
    var changeColor = (e)=>{
        var element = e.toElement.id //Obtenemos generador del evento
        btn_state = false;
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
        document.getElementById(clean[1]).style.color = "white";
        document.getElementById(clean[1]).style.borderColor = "white";
        document.getElementById(element).style.color = clean[0];
        document.getElementById(element).style.borderColor = clean[0];
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

    //Set controler
    function setViewController(element){
        console.log("controller seteado");
        controller = element
    }

    //Handlers
    document.getElementById('button-start').addEventListener('click',changeColor)
    document.getElementById('button-stop').addEventListener('click',changeColor)
}
