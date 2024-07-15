const inpTemp = document.getElementById("inpTemp");
const submit = document.getElementById("submit");
const ftocBtn = document.getElementById("r1");
const ctofBtn = document.getElementById("r2");
const result = document.getElementById("result");
let resultTemp;

function convert() {
  inpTempValue = inpTemp.value;
  if (r1.checked) {
    resultTemp = Math.floor(inpTempValue * (9 / 5) + 32);
    resultTemp = resultTemp.toFixed(1);
    result.textContent = `${inpTempValue}°F is equal to ${resultTemp}°C`;
  } else {
    resultTemp = (inpTempValue - 32) * (5 / 9);
    resultTemp = resultTemp.toFixed(3);
    result.textContent = `${inpTempValue}°C is equal to ${resultTemp}°F`;
  }
}
