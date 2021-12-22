var contractAddress = '0x90Cd28BC56588e9a8f4dE4b1F488c022c6b5e1F3';
import  ABIjson  from './ABI.json' assert { type: "json" };
var contractAbi = ABIjson;
var contract;
var account;

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("connectButton").addEventListener("click", function() {
        ConnectUserWaller();
    });

    document.getElementById("mintButton").addEventListener("click", function() {
        ConnectToSmartContract();
    });     
});

async function ConnectUserWaller() {
    const showAccount = document.querySelector('.showAccount');
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    account = accounts[0];
    console.log(accounts[0]);
    showAccount.innerHTML = account;
    const connect = document.getElementById("connectButton");
    connect.style.visibility = 'hidden';
}

function ConnectToSmartContract() {
    var web3 = new Web3(window.ethereum);
    contract = new web3.eth.Contract(contractAbi, contractAddress);

	contract.methods.getCurrentCost().call().then(function(cost){
		console.log(cost)
		var result = contract.methods.mint(1).send({ from: account, value: web3.utils.toWei(cost, 'wei')});
		console.log(result);
	});
}



(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        }, 0)
    }());
