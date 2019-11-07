let context, controller, player, loop;


context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 180;
context.canvas.width = 320;

player = {

    height:32,
    jumping: true,
    width: 32,
    x: 144,
    x_velocity: 0,
    y: 0,
    y_velocity: 0

};

controller = {

    left: false,
    right: false,
    up: false,
    keyListener: function(event) {
        var key_state = (event.type == "keydown") ? true: false;

        switch(event.keyCode) {

            case 37: 
                controller.left = key_state;
            break;
            case 38:
                controller.up = key_state;
            break;
            case 39:
                controller.right = key_state;
            break;

        }
    }
};

loop = function(){

    if (controller.up && rectangle.jumping == false) {

        player.y_velocity -= 20;
        player.jumping = true;

    }

    if (controller.left) {

        player.x_velocity -= 0.5;

    }

    if (controller.right) {

        player.x_velocity += 0.5; 
        
    }

}

const render = function(){

    context.canvas.width = document.documentElement.clientWidth * 0.5;
    context.canvas.height = document.documentElement.clientHeight * 0.5;

    context.fillStyle = '#688248';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)

}

window.addEventListener("resize", render);

render();