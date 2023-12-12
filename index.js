const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");

let errorTime;
let resultTime;

function updateResults() {
  // 입력한 값이 0보다 작거나, 숫자가 아니면
  if(inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerText = "please enter a valid number!";
    clearTimeout(errorTime);
    // 2초 후에 errorEl와 inputEl을 공란으로 만들기
    errorTime = setTimeout(() => {
      errorEl.innerText = "";
      inputEl.value = "";
    }, 2000);
  }else {
    resultEl.innerText = (+inputEl.value / 2.2).toFixed(2);

    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      resultEl.innerText = "";
      inputEl.value = "";
    }, 10000);
  }
}

inputEl.addEventListener("input", updateResults)