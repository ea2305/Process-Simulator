
//Cambia el color del boton al ser seleccionado
var changeColor = (e)=>{
    console.log(e)
}

var Box = function(app,settings){
    var center = app.center
    console.log(center);
    app.set({color : 'black'})

    app.add( new iio.Quad(
        {
            pos : [center.x,center.y - 300],
            width: 80,
            color : 'gray'
        }
    ))

    app.add( new iio.Quad(
        {
            pos : [center.x,center.y - 300],
            width: 60,
            color : 'white'
        }
    ))

}

// start the app fullscreen
iio.start( Box );

//Handlers
document.getElementById('button-start').addEventListener('click',changeColor)
document.getElementById('button-stop').addEventListener('click',changeColor)
