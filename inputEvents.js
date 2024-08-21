function getInputLoop() {
    addEventListener("keydown", function (event) {
        if (event.key == "w") {
            movePlayer("N")
            this.alert("North")
        }
        if (event.key == "s") {
            movePlayer("S")
            this.alert("south")
        }
        if (event.key == "d") {
            movePlayer("E")
            this.alert("east")
        }
        if (event.key == "a") {
            movePlayer("W")
            this.alert()
        }
    });
}