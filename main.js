var canvas=new fabric.Canvas("myCanvas");

playerx=10;
playery=10;

blockwidth=30;
blockheight=30;

var playerobject="";
var imageobject="";

function player_update(){
fabric.Image.fromURL("player.png", function(Img){
    playerobject=Img;
    playerobject.scaleToWidth(150);
    playerobject.scaleToHeight(140);
    playerobject.set({
        top:playery,
    left:playerx
    });
    canvas.add(playerobject);
});
}

function new_img(get_img){
    fabric.Image.fromURL(get_img, function(Img){
        imageobject=Img;
        imageobject.scaleToWidth(blockwidth);
        imageobject.scaleToHeight(blockheight);
        imageobject.set({
            top:playery,
        left:playerx
        });
        canvas.add(imageobject);
    });
    }
    window.addEventListener("keydown",my_mykeydown);
    function my_mykeydown(e){
        keypressed=e.keyCode;
        console.log(keypressed);
         if (e.shiftKey==true && keypressed=="80"){
            console.log("p and shift pressed together");
            blockwidth=blockwidth+10;
            blockheight=blockheight+10;
            document.getElementById("current_width").innerHTML=blockwidth;
            document.getElementById("current_height").innerHTML=blockheight;
         }
         if (e.shiftKey==true && keypressed=="77"){
            console.log("m and shift pressed together");
            blockwidth=blockwidth-10;
            blockheight=blockheight-10;
            document.getElementById("current_width").innerHTML=blockwidth;
            document.getElementById("current_height").innerHTML=blockheight;
         }
if (keypressed=="37") {
left();
console.log("left");
}

if (keypressed=="38") {
    up();
console.log("up");
}

if (keypressed=="39") {
    right();
console.log("right");
}

if (keypressed=="40") {
    down();
console.log("down");
}

if (keypressed=="87") {
    new_img("wall.jpg")
    console.log("w");
    }

    if (keypressed=="71") {
        new_img("ground.png")
        console.log("g");
        }

        if (keypressed=="76") {
            new_img("light_green.png")
            console.log("l");
            }

            if (keypressed=="84") {
                new_img("trunk.jpg")
                console.log("t");
                }

                if (keypressed=="82") {
                    new_img("roof.jpg")
                    console.log("r");
                    }

                    if (keypressed=="89") {
                        new_img("yellow_wall.png")
                        console.log("y");
                        }

                        if (keypressed=="68") {
                            new_img("dark_green.png")
                            console.log("d");
                            }

                            if (keypressed=="85") {
                                new_img("unique.png")
                                console.log("u");
                                }

                                if (keypressed=="87") {
                                    new_img("wall.jpg")
                                    console.log("w");
                                    }

                                    if (keypressed=="67") {
                                        new_img("cloud.jpg")
                                        console.log("c");
                                        }
    }

    function up(){
        if(playery >=0){
playery=playery-blockheight;
console.log("block image height="+ blockheight);
console.log("when up arrow key is pressed, x="+playerx + ", y="+playery);
canvas.remove(playerobject);
player_update();
        }
    }

    function down(){
        if(playery <=500){
playery=playery+blockheight;
console.log("block image height="+ blockheight);
console.log("when down arrow key is pressed, x="+playerx + ", y="+playery);
canvas.remove(playerobject);
player_update();
        }
    }

    function left(){
        if(playerx >=0){
playerx=playerx-blockwidth;
console.log("block image width="+ blockwidth);
console.log("when left arrow key is pressed, x="+playerx + ", y="+playery);
canvas.remove(playerobject);
player_update();
        }
    }

    function right(){
        if(playerx <=850){
playerx=playerx+blockwidth;
console.log("block image width="+ blockwidth);
console.log("when right arrow key is pressed, x="+playerx + ", y="+playery);
canvas.remove(playerobject);
player_update();
        }
    }
    