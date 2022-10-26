let ltprice = document.getElementById("ltprice");
let rate = document.getElementById("rate");
let ukprice = document.getElementById("ukprice");
let bid = document.getElementById("bid");
let commision = document.getElementById("commision");
let shipping = document.getElementById("shipping");
let calc = document.getElementById("calc");
let total = document.getElementById("total");
let profit = document.getElementById("profit");

console.log(ltprice.value == "");

calc.addEventListener("click", () => {
  if (!(ltprice.value == "") && !(bid.value == "") && !(shipping.value == "")) {
    ukprice.innerHTML = ltprice.value * rate.value + " £";
    let sum =
      Number(bid.value) +
      Number(bid.value * 0.2) +
      Number(bid.value * (commision.value / 100)) +
      Number(shipping.value);

    let gpbToEur = Number(sum / rate.value);
    total.innerHTML = Math.round(sum) + " £ or " + Math.round(gpbToEur) + " €";

    profit.innerHTML = Math.round(Number(ltprice.value - gpbToEur)) + " €";
  } else {
    profit.innerHTML = "Neivedei";
  }
});
