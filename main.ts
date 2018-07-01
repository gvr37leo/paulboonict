/// <reference path="node_modules/utilsx/utils.ts" />
/// <reference path="node_modules/rect2x/rect.ts" />


var jumbotronElement = document.querySelector('.jumbotron') as HTMLElement


var canvas = document.createElement('canvas')
var ctxt = canvas.getContext('2d')
canvas.style.top = "0"
canvas.width = jumbotronElement.clientWidth
canvas.height = jumbotronElement.clientHeight
canvas.style.position = "absolute"
jumbotronElement.appendChild(canvas)


var width = new Vector2(canvas.width,canvas.height) 


// loop((dt) => {
    ctxt.clearRect(0,0,width.x,width.y)
    var tilesize = new Vector2(50,50)
    
    var grid = new Vector2(Math.ceil(width.x / tilesize.x),Math.ceil(width.y / tilesize.y))
    grid.loop((v) => {
        var pos = v.c().mul(tilesize)
        var rect = new Rect(pos,tilesize)
        slantedLine(rect, Math.random() > 0.5)
    })

    
// })

function slantedLine(rect:Rect,right:boolean){
    if(right){
        line(ctxt,rect.getPoint(new Vector2(-1,-1)),rect.getPoint(new Vector2(1,1)))
    }else{
        line(ctxt,rect.getPoint(new Vector2(1,-1)),rect.getPoint(new Vector2(-1,1)))
    }
}

function line(ctxt:CanvasRenderingContext2D,a:Vector2,b:Vector2){
    ctxt.beginPath()
    ctxt.moveTo(a.x,a.y)
    ctxt.lineTo(b.x,b.y)
    ctxt.stroke()
}