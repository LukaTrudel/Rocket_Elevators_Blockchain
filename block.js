// var contractAddress = '';
// var contractAbi;
// var contract;


var web3;

$(document).ready(function() {
   
});

async function ConnectUserWaller() {
    const showAccount = document.querySelector('.showAccount');
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(accounts[0]);
    showAccount.innerHTML = account;
    const connect = document.getElementById("connectButton");
    connect.style.visibility = 'hidden';
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("connectButton").addEventListener("click", function() {
        ConnectUserWaller();
    });
});

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

// async function ConnectToSmartContract() {
//     contract = new web3.eth.Contract(contractAbi, contractAddress);
// }

function buy() {
    if (web3 == 'undefined') {
        alert('You need to connect you wallet.')
        return 0;
    }
    alert('buying');
}