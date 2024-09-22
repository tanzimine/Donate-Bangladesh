const donateNowButtons = document.getElementsByClassName("btn-donate");

for (let i = 0; i < donateNowButtons.length; i++) {
    donateNowButtons[i].addEventListener("click", function() {
        console.log("Ami clicked...");
    });
}
