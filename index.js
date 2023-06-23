const btnEl = document.getElementById("calculate");
const billEl = document.getElementById("amount");
const tipEl = document.getElementById("percentage")
const totalEl = document.getElementById("total")

function calculateTip(){
   let billValue = billEl.value;
    let tipValue = tipEl.value;
    let total = billValue * (1 + tipValue / 100)

    totalEl.innerText = Math.floor(total)
}


btnEl.addEventListener("click", calculateTip)