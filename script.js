document.getElementById("checkout_button").addEventListener("click", congratulationMessage);

document.getElementById("buy_button").addEventListener("click", addToCart);

document.getElementById("buy_button2").addEventListener("click", addToCart);

document.getElementById("buy_button").addEventListener("click", rewritePriceAirforce);

document.getElementById("buy_button2").addEventListener("click", rewritePriceAirmax);

function rewritePriceAirmax() {
    document.getElementById("pair").innerHTML = "NIke Airmax V5";
    document.getElementById("pricetag").innerHTML = "$200";
}

function rewritePriceAirforce() {
    document.getElementById("pair").innerHTML = "NIke Airforce 1";
    document.getElementById("pricetag").innerHTML = "$200";
}

function addToCart() {
    alert ("Added your new Nikes to the cart!!!");
}
function congratulationMessage() {
    alert ("Congratulations you just bought new shoes");
}