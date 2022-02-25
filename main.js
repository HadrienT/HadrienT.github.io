var aCanvas;
var x_coord = 0;
var y_coord = 0;
var obj;
var context;
var intervalID;
var aCanvas;
var entier = 500;

function init() {
    aCanvas = document.getElementById('myCanvas');
    div1 = document.getElementById('div1');
    context = aCanvas.getContext('2d');
    for( const i=0; i<10; i++){
        createWorker();
    }
}

function updateCanvas() {
    point1 = new Point(obj.x, obj.y, aCanvas);
    point1.ache();
    div1.innerHTML = "x: " + String(obj.x) + "," + " y:" + String(obj.y);
}

function reset() {
    context.clearRect(0, 0, aCanvas.width, aCanvas.height);
}

function auto() {
    clearInterval(intervalID);
    intervalID = setInterval(updateCanvas, 100);
}

function createWorker() {
    let x;
    let y;
    if (window.Worker) {
        const myWorker = new Worker("worker.js");
        
        myWorker.onmessage = function (e) {
            x = e.data[0];
            y = e.data[1];
            point=new Point(x,y,aCanvas);
            point.ache();
        }
    } else {
        console.log('Your browser doesn\'t support web workers.')
    }
}