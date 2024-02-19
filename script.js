const byeTickets = document.getElementById("bye-tickets");
byeTickets.addEventListener('click', function () {
    const selectYourSeat = document.getElementById("select-your-seat");
    selectYourSeat.scrollIntoView();
})

const busSeats = document.getElementsByClassName("bus-seat");

for (i = 0; i < busSeats.length; i++) {
    const busSeat = busSeats[i];
    busSeat.addEventListener('click', function () {
        busSeat.style.backgroundColor = "#1DD100"
        const name = busSeat.innerText;

        // fourty seat left
        const fourtySeatsLeft = document.getElementById("fourty-seats-left");
        const fourtySeatsNumber = fourtySeatsLeft.innerText;
        const number = parseInt(fourtySeatsNumber);
        const newNumber = number - 1;
        fourtySeatsLeft.innerText = newNumber;
        
        // select seats section
        const selectedSeat = document.getElementById("selected-seat");
        const selectedSeatNumber = selectedSeat.innerText;
        const seatNumber = parseInt(selectedSeatNumber);
        const newSeatNumber = seatNumber + 1;
        selectedSeat.innerText = newSeatNumber;

        // seat added section
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
    })
    
    
}