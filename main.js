canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

rover_height = 90
rover_width = 100

rover_x = 40
rover_y = 40

img_array = ["mars_1.jpg", "mars_2.jpg", "mars_3.jpg", "mars_4.jpg", "mars_5.jpg", "mars_6.jpg", "mars.jpg"]

random = Math.floor(Math.random() * 7);
background_img =  img_array[random]
rover_img = "rover.png"

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = upload_background;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = upload_rover;
    rover_imgTag.src = rover_img;
}

function upload_background(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function upload_rover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height)
}

window.addEventListener("keydown", my_Keydown);

function my_Keydown(e){
    keypressed = e.keyCode
    console.log(keypressed)
    if(keypressed == '38'){
        up()
        console.log("up")
    }
    if(keypressed == '37'){
        left()
        console.log("left")
    }
    if(keypressed == '40'){
        down()
        console.log("down")
    }
    if(keypressed == '39'){
        right()
        console.log("right")
    }
}

function up(){
    if(rover_y > -50){
        rover_y = rover_y - 10;
        console.log("postion : " + rover_x + " ," + rover_y );
        upload_background();
        upload_rover();
    }
}

function down(){
    if(rover_y <= 550){
        rover_y = rover_y + 10;
        console.log("postion : " + rover_x + " ," + rover_y );
        upload_background();
        upload_rover();
    }
}

function left(){
    if(rover_x > -50){
        rover_x = rover_x - 10;
        console.log("postion : " + rover_x + " ," + rover_y );
        upload_background();
        upload_rover();
    }
}

function right(){
    if(rover_x <= 750){
        rover_x = rover_x + 10;
        console.log("postion : " + rover_x + " ," + rover_y );
        upload_background();
        upload_rover();
    }
}

