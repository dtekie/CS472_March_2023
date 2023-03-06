function calcTip() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tip = parseFloat(document.getElementById("tip").value);
    const total = subtotal * ( 1 + tip / 100);
    const displayedTotal = document.getElementById("total").textContent = "$" + total.toFixed(2);
    return displayedTotal;
}


// function clear(){
// localStorage.lastname = "Smith";
// document.getElementById("result").innerHTML
// = localStorage.lastname;
// localStorage.removeItem("lastname");
// }