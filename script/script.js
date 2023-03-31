// let billInput = document.querySelector("#number-input");

let fiveInput = document.querySelector("#five");
let tenInput = document.querySelector("#ten");
let fifteenInput = document.querySelector("#fifteen");
let twentyInput = document.querySelector("#twenty");
let fiftyInput = document.querySelector("#fifty");

let tipSpan = document.querySelector("#tip");
let totalSpan = document.querySelector("#total");

let sendButton = document.querySelector("#send");

let resetButton = document.querySelector("#resetButton");

// ao clicar no botão calcular, pegar os valores dos inputs e realizar os
// calculos
sendButton.addEventListener("click", function (e) {
  e.preventDefault();

  const numInput = document.querySelector("#number-input");
  const numValue = numInput.value;

  const numPpl = document.querySelector("#ppl");
  const pplValue = numPpl.value;

  const customInput = document.querySelector("#dif-input");
  const customValue = customInput.value;

  console.log(numValue);
  console.log(customValue);
  console.log(pplValue);

  function getRadioValue() {
    var radio = document.getElementsByName("fav_language");
    for (i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        //calculo para saber a porcentagem baseada no valor do radio selecionado
        totalTipValue = numValue * radio[i].value;
        
        // mostrando resultado da da porcentagem do valor
        console.log(totalTipValue);
        //calculo para dividir por pessoa
        let tipEachPer = totalTipValue / pplValue;
        // mostrando resultado da divisão
        console.log(tipEachPer);
        tipSpan.innerHTML = `$${tipEachPer.toFixed(2)}`;
        totalSpan.innerHTML = `$${totalTipValue.toFixed(2)}`;
      }

      // falta colocar os 2 resultados encontrados a cima e colocar nas divs do quadrado verde
    }
  }
  getRadioValue();

});


// valor do input checked
// function getChecked() {
//     const checkBox = document.getElementById('check1').checked;
//     if (checkBox === true) {
//       console.log(true);
//       } else {
//         console.log(false);
//     }
//   }
