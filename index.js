var IntialPrice = document.querySelector('#Intial-price')
var StockQuantity = document.querySelector('#stocks-quantity')
var currentPrice = document.querySelector('#current-price')
var output = document.querySelector('#Output-box')
var btn = document.querySelector("#submit-btn")


btn.addEventListener('click', submitHandler)

function submitHandler(){
  var ip = Number(IntialPrice.value)
  var qty = Number(StockQuantity.value)
  var curr = Number(currentPrice.value)

  calculateProfitAndLoss(ip,qty,curr)
}

function calculateProfitAndLoss(initial,quantity,current){
  if(initial > current){
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss /  (initial * quantity)) * 100;
showmessage("Hey you loss is "+(loss) + " and the percent is " +(lossPercentage.toFixed(2)) + "%")
output.style.color="red";
    
  }

  else if(current > initial){
    var profit = (current - initial) * quantity
      var profitPercentage = (profit / (initial * quantity)) * 100;

      showmessage("Hey you profit is "+(profit) + " and the percent is " +(profitPercentage.toFixed(2)) + "%")
      output.style.color="green";
  }
  else{
    showmessage("Please Fill the form")
    output.style.color="red";
  }
}

function showmessage(message){
  output.innerHTML = message;
}