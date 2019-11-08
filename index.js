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

    if (controller.up && player.jumping == false) {

        player.y_velocity -= 20;
        player.jumping = true;

    }

    if (controller.left) {

        player.x_velocity -= 0.5;

    }

    if (controller.right) {

        player.x_velocity += 0.5; 
        
    }

    player.y_velocity += 1.5;// gravity
    player.x += player.x_velocity;
    player.y += player.y_velocity;
    player.x_velocity *= 0.9;// friction
    player.y_velocity *= 0.9;// friction


if (player.y > 180 - 16 - 32) {

    player.jumping = false;
    player.y = 180 - 16 - 32;
    player.y_velocity = 0;

  }

  if (player.x < -32) {

    player.x = 320;

  } else if (player.x > 320) {// if player goes past right boundary

    player.x = -32;

  }
    context.fillStyle = '#688248';
    context.fillRect(0, 0, 320, 180);// x, y, width, height
    context.fillStyle = "#ff0000";// hex for red
    context.beginPath();
    context.rect(player.x, player.y, player.width, player.height);
    context.fill();
    context.strokeStyle = "#202830";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(0, 164);
    context.lineTo(320, 164);
    context.stroke();

// call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);


// const render = function(){

//     context.canvas.width = document.documentElement.clientWidth * 0.5;
//     context.canvas.height = document.documentElement.clientHeight * 0.5;

// }

// window.addEventListener("resize", render);

// render();