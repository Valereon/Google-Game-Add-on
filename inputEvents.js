function getInputLoop() {
    addEventListener("keydown", function (event) {
        if (event.key == "w") {
            movePlayer("N")
        }
        if (event.key == "s") {
            movePlayer("S")
        }
        if (event.key == "d") {
            movePlayer("E")
        }
        if (event.key == "a") {
            movePlayer("W")
        }
    });
}