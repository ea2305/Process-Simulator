
window.onload = () => {

    //iniciamos el controlador
    myController = new Controller;
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
            console.log(myController.model.method);
        } else {
            //stopSimulation();
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
