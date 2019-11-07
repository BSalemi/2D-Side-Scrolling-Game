const context = document.querySelector("canvas").getContext("2d");

const render = function(){

    context.canvas.width = document.documentElement.clientWidth * 0.5;
    context.canvas.height = document.documentElement.clientHeight * 0.5;

    context.fillStyle = '#688248';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)

}

window.addEventListener("resize", render);

render();