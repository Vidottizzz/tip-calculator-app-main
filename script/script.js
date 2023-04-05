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

//BOTÃO DE RESET 
resetButton.addEventListener("click", function (e) {

  var element = document.getElementById("FORM");
  e.preventDefault();
   element.reset();
   tipSpan.innerHTML = "$0.00";
  totalSpan.innerHTML = "$0.00";
});








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
      let name1 = document.forms["Form"]["numberppl"].value;

      // mostrando resultado da divisão
      console.log(tipEachPer);
      // tipSpan.innerHTML = `$${tipEachPer.toFixed(2)}`;
      // totalSpan.innerHTML = `$${totalTipValue.toFixed(2)}`;
      if (name1 == ""){
        tipSpan.innerHTML = "Error";
        totalSpan.innerHTML = "Error";
      }else {
        tipSpan.innerHTML = `$${tipEachPer.toFixed(2)}`;
        totalSpan.innerHTML = `$${totalTipValue.toFixed(2)}`;
      }

      }
      // falta colocar os 2 resultados encontrados a cima e colocar nas divs do quadrado verde
    }
  }
  function calculateCustom() {
    if(customValue != "") {
     let  CustomTotalTipValue = numValue * (customValue / 100);
     let CustomtipEachPer = CustomTotalTipValue / pplValue

      tipSpan.innerHTML = `$${CustomtipEachPer.toFixed(2)}`;
      totalSpan.innerHTML = `$${CustomTotalTipValue.toFixed(2)}`
    }


  }
calculateCustom()
  getRadioValue();
});


//estrutura para validação - mudar variaveis
function validate() {
  let name = document.forms["Form"]["numInput"].value;
  let name1 = document.forms["Form"]["numberppl"].value;
  let errMsg1 = document.querySelector(".err-msg1");

  let tipSpan = document.querySelector("#tip");
let totalSpan = document.querySelector("#total");


  // se nome for vazio adiciona a classe vermelha para a borda do elemento  e remove o atributo hide da mensagem de erro
  if (name1 == "") {
    errMsg1.classList.remove("hide");
    document.forms["Form"]["numberppl"].classList.add("border-red");
    totalSpan.innerHTML = "err";

  } else {
    errMsg1.classList.add("hide");
    document.forms["Form"]["numberppl"].classList.remove("border-red");
    
  }
 


  
  // if (customValue != null) {
  //   var ele = document.getElementsByName("fav_language");
  //   for (var i = 0; i < ele.length; i++) ele[i].checked = false;
  //   // conta
  // }
  // let ppl = document.querySelector("#ppl");
  // const pplValue = ppl.value;

  // const customInput = document.querySelector("#dif-input");
  // const customValue = customInput.value;
  // console.log(customValue);

  // let totalTipValueCustom = numValue * (customValue / 100);
  // let tipeachperCustom = totalTipValueCustom / pplValue;

  // tipSpan.innerHTML = `$${tipeachperCustom.toFixed(2)}`;
  // totalSpan.innerHTML = `$${totalTipValueCustom.toFixed(2)}`;
}
