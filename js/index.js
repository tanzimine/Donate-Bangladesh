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

        // HISTORY LIST
        const historyItem = document.createElement("div");
        historyItem.className = "bg-white p-3 rounded-lg border-2 border-black-200 mb-3";
        const timestamp = new Date().toLocaleString('en-BD', { timeZone: 'Asia/Dhaka' });

        historyItem.innerHTML = `
        <p class="mb-1 font-semibold text-xs text-gray-500">${donationValue.toFixed(2)} Taka is Donated for the disaster in Bangladesh</p>
        <p class="p-1 font-medium bg-slate-100 rounded-md text-xs text-gray-500">Date: ${timestamp}</p>
        `;

        const historyContainer = document.getElementById("history-list");
        historyContainer.appendChild(historyItem); 

        

        //for clear
        donationInputFields[i].value = "";

        //Congrats modal open
        document.getElementById("my_modal_7").checked = true;


    });
}


// HISTORY BUTTON

const historyTab = document.getElementById("btn-history")
const donationTab = document.getElementById("donation-button")
historyTab.addEventListener("click", function() {
    document.getElementById("main-container").classList.add("hidden");
    document.getElementById("history-list").classList.remove("hidden");

    historyTab.classList.add(
        "bg-lime-400",
        "py-2",
        "px-6",
        "rounded-lg",
        "shadow",
        "hover:bg-lime-500",
        "text-black",
        "border",
        "border-gray-300"
    );

    historyTab.classList.remove("text-gray-600");
    donationTab.classList.remove(
        "bg-lime-400",
        "py-2",
        "px-6",
        "rounded-lg",
        "shadow",
        "hover:bg-lime-500",
        "text-black",
        "border",
        "border-gray-300"
    ); 
    historyTab.classList.remove("text-gray-600");
    
});

donationTab.addEventListener("click", function(){

    document.getElementById("main-container").classList.remove("hidden");
    document.getElementById("history-list").classList.add("hidden");

    historyTab.classList.remove(
        "bg-lime-400",
        "py-2",
        "px-6",
        "rounded-lg",
        "shadow",
        "hover:bg-lime-500",
        "text-black",
        "border",
        "border-gray-300"
    );
    
    donationTab.classList.add(
        "bg-lime-400",
        "py-2",
        "px-6",
        "rounded-lg",
        "shadow",
        "hover:bg-lime-500",
        "text-black",
        "border",
        "border-gray-300"
    ); 
});
