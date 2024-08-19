var playerX = 0;
var playerY = 0;

//at 11 font size it is 63 chars across

function movePlayer(dir){
    if(dir == "N"){
        playerY += 63;
        checkBounds()
    }
    if(dir == "S"){
        playerY -= 63
        checkBounds()
    }
    if(dir == "E"){
        playerX += 1
        checkBounds()
    }
    if(dir == "W"){
        playerX -= 1
        checkBounds()
    }
}


function checkBounds(){
    if(playerX > 63){
        playerX = 63;
    }
    if( playerX < 0){
        playerX = 0;
    }
    if(playerY < 0){
        playerY = 0
    }
}


function getPlayerXY(){
    return playerX, playerY
}