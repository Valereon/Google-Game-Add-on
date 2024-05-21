function getInputLoop() {
    addEventListener("keydown", function (event) {
        if (event.code == "w") {
            movePlayer("N")
        }
        if (event.code == "s") {
            movePlayer("S")
        }
        if (event.code == "d") {
            movePlayer("E")
        }
        if (event.code == "a") {
            movePlayer("W")
        }
    });
}