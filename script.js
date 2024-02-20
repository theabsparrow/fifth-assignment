const byeTickets = document.getElementById("bye-tickets");
let totalPrice = 0;
let grandTotalPrice = 0;
let grandTotal = document.getElementById("grand-total");



byeTickets.addEventListener('click', function () {
    const selectYourSeat = document.getElementById("select-your-seat");
    selectYourSeat.scrollIntoView();
})

const busSeats = document.getElementsByClassName("bus-seat");
let selectedBusSeat = [];
let j = 0;
for (i = 0; i < busSeats.length; i++) {
    const busSeat = busSeats[i];
    busSeat.addEventListener('click', function () {
        // busSeat.style.backgroundColor = "#1DD100"
        const name = busSeat.innerText;
        j++

        if (selectedBusSeat.includes(name) === false) {
            selectedBusSeat.push(name);

            if (selectedBusSeat.length > 4) {
                alert("you can't bye more than four tickets together");
                return;

            }
            else {
                busSeat.style.backgroundColor = "#1DD100"
                // total seats decreasing section
                const fourtySeatsLeft = document.getElementById("fourty-seats-left");
                const fourtySeatsNumber = fourtySeatsLeft.innerText;
                const number = parseInt(fourtySeatsNumber);
                const newNumber = number - 1;
                fourtySeatsLeft.innerText = newNumber;

                // select seats increasing section
                const selectedSeat = document.getElementById("selected-seat");
                const selectedSeatNumber = selectedSeat.innerText;
                const seatNumber = parseInt(selectedSeatNumber);
                const newSeatNumber = seatNumber + 1;
                selectedSeat.innerText = newSeatNumber;

                // seat number added section
                const seatAndPrice = document.getElementById("seat-and-price");
                const div = document.createElement("div")
                const p = document.createElement("p");
                const p2 = document.createElement("p");
                const p3 = document.createElement("p");
                p.innerText = name;
                p2.innerText = "Economy";
                p3.innerText = "550";
                div.appendChild(p);
                div.appendChild(p2);
                div.appendChild(p3);
                seatAndPrice.appendChild(div);

                const ticketPrice = 550;

                // total amount section
                const totalAmount = document.getElementById("total-amount");
                totalPrice += ticketPrice;
                totalAmount.innerText = totalPrice;


                // grand total amount section
                const grandTotal = document.getElementById("grand-total");
                grandTotalPrice += ticketPrice;
                grandTotal.innerText = grandTotalPrice;

            }
        }
    })
}

const couponButton = document.getElementById("coupon-button");
couponButton.addEventListener('click', function () {
    const couponInput = document.getElementById("coupon-input");
    const couponElement = couponInput.value;
    const couponCode = couponElement;
    couponInput.value = ""

    // coupon section

    if (totalPrice === 2200 && couponCode === "NEW15") {

        const discountAmount = totalPrice * 0.15;
        const discountGrandTotal = totalPrice - discountAmount;
        grandTotal.innerText = discountGrandTotal;

        const discountedDiv = document.getElementById("discounted-div")
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        h1.innerText = "Discount";
        h2.innerText = discountAmount;
        discountedDiv.appendChild(h1);
        discountedDiv.appendChild(h2);
        return;
    }
    else if (totalPrice === 2200 && couponCode === "Couple 20") {

        const discount = totalPrice * 0.2
        const coupleDiscount = totalPrice - discount;
        grandTotal.innerText = coupleDiscount;

        const discountDiv = document.getElementById("discounted-div")
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        h1.innerText = "Discount";
        h2.innerText = discount;
        discountDiv.appendChild(h1);
        discountDiv.appendChild(h2);
        return;
    }
    else {
        alert("bye atleast four tickets or invalid coupon code");
    }
})

const nextButton = document.getElementById("next-button");

function checkform() {
    const passengerNumber = document.getElementById("passenger-number");
    let fieldIsFiiled = true;

    if (passengerNumber.value.length === 0) {
        fieldIsFiiled = false;
    }

    else if ((fieldIsFiiled) && (selectedBusSeat.length > 0)) {
        nextButton.disabled = false;

    }
    else {
        nextButton.disabled = true;
    }
}

function ShowingSuccessPage() {
    const SuccessPage = document.getElementById("success-page");
    SuccessPage.classList.remove("hidden");
}



