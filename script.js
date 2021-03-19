document.getElementById("checkout_button").addEventListener("click", congratulationMessage);

document.getElementById("buy_button").addEventListener("click", addToCart);

document.getElementById("buy_button2").addEventListener("click", addToCart);

document.getElementById("buy_button").addEventListener("click", rewritePriceAirforce);

document.getElementById("buy_button2").addEventListener("click", rewritePriceAirmax);

function rewritePriceAirmax() {
    // document.getElementById("").innerHTML = "NIke Airmax V5";
    // document.getElementById("").innerHTML = "$200";
    document.getElementById("empty_div").innerHTML = `
    <li>
    Airmax 200$
    </li>
    `
}

function rewritePriceAirforce() {
    document.getElementById("empty_div").innerHTML = `
    <li>
    Airforce 200$
    </li>
    `
}

function addToCart() {
    alert ("Added your new Nikes to the cart!!!");
}
function congratulationMessage() {
    alert ("Congratulations you just bought new shoes");
}