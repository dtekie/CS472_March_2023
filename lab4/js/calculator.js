function calcTip() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tip = parseFloat(document.getElementById("tip").value);
    const total = subtotal + (subtotal * tip / 100);
    return document.getElementById("total").textContent = "$" + total.toFixed(2);
}

function clear(){
localStorage.lastname = "Smith";
document.getElementById("result").innerHTML
= localStorage.lastname;
localStorage.removeItem("lastname");
}