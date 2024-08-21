function getInputLoop() {
    addEventListener("keydown", function (event) {
        if (event.code == "w") {
            movePlayer("N")
            this.alert("North")
        }
        if (event.code == "s") {
            movePlayer("S")
            this.alert("south")
        }
        if (event.code == "d") {
            movePlayer("E")
            this.alert("east")
        }
        if (event.code == "a") {
            movePlayer("W")
            this.alert("west")
        }
    });
}