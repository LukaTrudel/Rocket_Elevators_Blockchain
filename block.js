// var contractAddress = '';
// var contractAbi;
// var contract;


var web3;

async function ConnectUserWaller() {
    await window.web3.currentProvider.enable();
    web3 = new Web3(window.web3.currentProvider);
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("connectButton").addEventListener("click", function() {
        ConnectUserWaller();
    }); 
    
    
});

// async function ConnectToSmartContract() {
//     contract = new web3.eth.Contract(contractAbi, contractAddress);
// }

// function buy() {
//     if (web3 == 'undefined') {
//         alert('You need to connect you wallet.')
//         return 0;
//     }

//     alert('buying');
// }