/// <reference path="node_modules/utilsx/utils.ts" />
/// <reference path="node_modules/vectorx/vector.ts" />

var jumbotronElement = document.querySelector('.jumbotron') as HTMLElement


var canvas = document.createElement('canvas')
var ctxt = canvas.getContext('2d')
canvas.style.top = "0"
canvas.width = jumbotronElement.clientWidth
canvas.height = jumbotronElement.clientHeight
canvas.style.position = "absolute"
jumbotronElement.appendChild(canvas)


loop((dt) => {
    ctxt.clearRect(0,0,500,500)

    ctxt.fillRect(400,0,400,1000)
})