const byeTickets = document.getElementById("bye-tickets");
byeTickets.addEventListener('click', function () {
    const selectYourSeat = document.getElementById("select-your-seat");
    selectYourSeat.scrollIntoView();
})

const busSeats = document.getElementsByClassName("bus-seat");

for (i = 0; i < busSeats.length; i++) {
    const busSeat = busSeats[i];
    busSeat.addEventListener('click', function () {
        const name = busSeat.innerText;
        busSeat.style.backgroundColor = "#1DD100"
        
    })
    
    
}