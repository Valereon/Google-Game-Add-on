// Parse the map into a 2d array
// Make changes to the map

var map = []

function loadMap(){
    let text = document.getElementById("Map").innerText;
    text = text.split('\n')
    for (let index = 0; index < text.length; index++) {
        
        map.concat(text[index].split(''));
        
        
    }
}