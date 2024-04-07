//dynamic cart element name add hosse

function setTextElementValueById(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.innerText = value;
    } else {
        console.error(`Element with ID ${id} not found.`);
    }
}

function dynamicEntry(product){

    console.log(product)
    const dynamicName = document.getElementById('dynamic');
    const count = dynamicName.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${product}  `;

    dynamicName.appendChild(p);
} 


// Function to calculate discount and update total price
function calculateDiscountAndTotal() {
    const couponInput = document.getElementById('couponInput');
    const discountSpan = document.getElementById('discount');
    const totalSpan = document.getElementById('total');
    const totalPriceString = document.getElementById('totalPrice').innerText;
    let totalPrice = parseFloat(totalPriceString);

    // Check if coupon code is "SELL200"
    if (couponInput.value === "SELL200") {
        const discountAmount = totalPrice * 0.2; // 20% discount
        discountSpan.innerText = discountAmount.toFixed(2); // Display discount amount
        totalPrice -= discountAmount; // Apply discount to total price
    } else {
        discountSpan.innerText = "0"; // No discount applied
    }

    totalSpan.innerText = totalPrice.toFixed(2); // Display updated total price
}

// Event listener for clicking on "Apply" button
document.getElementById('applyButton').addEventListener('click', function() {
    calculateDiscountAndTotal();
});





// card click korle j price gulo add hosse total a


document.querySelectorAll('.everyCard').forEach(function(card) {
    card.addEventListener('click', function() {
        const naam = card.querySelector('.card-title'); 
        const naamText = naam.textContent;
        console.log(naamText);

        const daam = card.querySelector('.pPrice');
        const daamString = daam.textContent;
        const daamFloat = parseFloat(daamString);
        console.log(daamFloat);

        const totalString = document.getElementById('totalPrice').innerText;
        const totalFloat = parseFloat(totalString);

        const totalAddition = totalFloat + daamFloat;

        setTextElementValueById('totalPrice', totalAddition);

        console.log(totalAddition);

        dynamicEntry(naamText)

        toggleApplyButton(totalAddition);


         // Enable the "Make Purchase" button when a card is clicked
        
        makePurchaseBtn.disabled = false;

    });
});

// Initially disable the "Make Purchase" button

    const makePurchaseBtn = document.getElementById('makePurchase');
    makePurchaseBtn.disabled = true;

// Initially disable the "Apply" button

    const applyButton = document.getElementById('applyButton');
    applyButton.disabled = true;


// Function to enable or disable the "Apply" button based on total price
function toggleApplyButton(totalPrice) {
    const applyButton = document.getElementById('applyButton');
    if (totalPrice >= 200) {
        applyButton.disabled = false;
    } else {
        applyButton.disabled = true;
    }
}



// Function to calculate discount and update total price
function calculateDiscountAndTotal() {
    const couponInput = document.getElementById('couponInput');
    const discountSpan = document.getElementById('discount');
    const totalSpan = document.getElementById('total');
    const totalPriceString = document.getElementById('totalPrice').innerText;
    let totalPrice = parseFloat(totalPriceString);

    // Check if coupon code is "SELL200"
    if (couponInput.value === "SELL200") {
        const discountAmount = totalPrice * 0.2; // 20% discount
        discountSpan.innerText = discountAmount.toFixed(2); // Display discount amount
        totalPrice -= discountAmount; // Apply discount to total price
    } else {
        discountSpan.innerText = "0.00"; // No discount applied
    }

    totalSpan.innerText = totalPrice.toFixed(2); // Display updated total price
}

// Event listener for clicking on "Apply" button
document.getElementById('applyButton').addEventListener('click', function() {
    calculateDiscountAndTotal();
});


// Get the modal elements
const modalBackdrop = document.getElementById('modalBackdrop');
const modalDialog = document.getElementById('modalDialog');

// Get the purchase button
const purchaseButton = document.getElementById('makePurchase');

// Event listener for purchase button click
if (purchaseButton) {
    purchaseButton.addEventListener('click', function () {
        // Show the modal
        showModal();
    });
}

// Event listener for "Go Home" button click
const goHomeButton = document.getElementById('goHomeButton');
if (goHomeButton) {
    goHomeButton.addEventListener('click', function () {
        // Redirect to the index.html page
        window.location.href = "index.html";
        // Refresh the page after 1 second (1000 milliseconds)
        setTimeout(function () {
            window.location.reload();
        }, 1000);
    });
}

// Function to show the modal
function showModal() {
    // Show the modal backdrop and dialog
    if (modalBackdrop && modalDialog) {
        modalBackdrop.classList.remove('hidden');
        modalDialog.classList.remove('hidden');
    } else {
        console.error("Modal elements not found.");
    }
}

// Function to hide the modal
function hideModal() {
    // Hide the modal backdrop and dialog
    if (modalBackdrop && modalDialog) {
        modalBackdrop.classList.add('hidden');
        modalDialog.classList.add('hidden');
    } else {
        console.error("Modal elements not found.");
    }
}

