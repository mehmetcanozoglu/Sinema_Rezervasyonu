const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');

getLocalstroge()
calculateTotal()

container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected')
    }
    calculateTotal()
})

select.addEventListener('click', () =>{
    calculateTotal()
})
function calculateTotal(){
    let selectSeats = container.querySelectorAll('.seat.selected')

    let selectedSeatsArr = []
    let seatsArr = []

    selectSeats.forEach((seat) =>{
    selectedSeatsArr.push(seat)
    })

    seats.forEach((seat) =>{
     seatsArr.push(seat)
    })

    let selectedIndex = selectedSeatsArr.map((seat) =>{
        return seatsArr.indexOf(seat)
    })
    console.log(selectedIndex);
    
    let selectedSeatValue = selectSeats.length
    count.innerText = selectedSeatValue
    amount.innerText = selectedSeatValue * select.value

    savelocalstorage(selectedIndex)
}

function savelocalstorage(index){
    localStorage.setItem('selected', JSON.stringify(index))
    localStorage.setItem('selecMovıeIndex', select.selectedIndex)
}

function getLocalstroge(){
    let selectedIndex = JSON.parse(localStorage.getItem('selected'))
    let selectedMovıe = localStorage.getItem('selecMovıeIndex')

    if(selectedIndex != null && selectedIndex.length > 0){
        seats.forEach((seat, index)=>{
            if(selectedIndex.indexOf(index) > -1){
             seat.classList.add('selected')
            }
        })
    }

    if(selectedMovıe != null){
        select.selectedIndex = selectedMovıe
    }
}
