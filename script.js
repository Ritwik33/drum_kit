function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./media/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./media/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./media/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./media/sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./media/sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("./media/sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("./media/sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default: console.log(key + " was pressed");
            break;
    }
}

function drumAnimation(currentKey) {

    document.querySelector("." + currentKey).classList.add("pressed");

    setTimeout(function () {

        document.querySelector("." + currentKey).classList.remove("pressed");

    }, 100);

}

for(var drum of document.querySelectorAll(".drum")) {
    drum.addEventListener("click", function () {

        var drumInnerHtml = this.innerHTML;

        makeSound(drumInnerHtml);

        drumAnimation(drumInnerHtml);

    });
}

document.addEventListener("keydown", function (event) {

    makeSound(event.key);

    drumAnimation(event.key);

});

