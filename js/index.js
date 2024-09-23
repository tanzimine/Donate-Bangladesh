const donateNowButtons = document.getElementsByClassName("btn-donate");
let sum = 0; 
for (let i = 0; i < donateNowButtons.length; i++) {
    donateNowButtons[i].addEventListener("click", function() {

        const donationInputFields = document.getElementsByClassName("donation-amount");
        let donationValue = parseFloat(donationInputFields[i].value); 

        //alert message
        if (isNaN(donationValue) || donationValue <= 0) {
            alert("Please enter a valid donation amount.");
            return;
        }

        const showedAmount = document.getElementsByClassName("showed-amount");

        let currentAmountText = showedAmount[i].innerText;
        let currentAmount = parseFloat(currentAmountText.replace(" BDT", "")); // Remove " BDT" and convert to number

        let newAmount = currentAmount + donationValue;

        showedAmount[i].innerText = newAmount + " BDT";

        sum = sum + donationValue;
        
        const balanceValue = 5500 - sum;

        const balance = document.getElementById("balance");
        balance.innerText = balanceValue + " BDT";


        

        //for clear
        donationInputFields[i].value = "";
    });
}


// HISTORY BUTTON
document.getElementById("btn-history").addEventListener("click", function() {

    
});