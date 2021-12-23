# Rocket_Elevators_Blockchain

For the purpose of the 12th week of the Codeboxx program, we created an static app connected to a smart contract on the Rinkeby network (Ethereum Testnet) and another one on the Mumbai network (Polygon Matic).
By going on the [app](http://rocketliftblockchain.s3-website.ca-central-1.amazonaws.com/), users are able to click the connect button to connect their wallet and the mint button to mint an NFT. 
However, it's important that the metamask wallet is already connected to either the Rinkeby network or the Mumbai network before clicking the mint button, as seen below.

- Rinkeby network
  - <img width="268" alt="rinkeby" src="https://user-images.githubusercontent.com/67526512/147258148-74c55d7e-4a0d-4f35-8526-4a80acf118ab.PNG">
  - Network settings
    - Network Name: Rinkeby Test Network
    - New RPC URL: https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161
    - Chain ID: 4
    - Currency Symbol(Optional): ETH
    - Block Explorer URL(Optional): https://rinkeby.etherscan.io
  
- Mumbai network
  - <img width="268" alt="mumbai" src="https://user-images.githubusercontent.com/67526512/147259031-71999926-f8a0-452f-8390-a23f715862be.PNG">
  - Network settings
    - Network Name: Mumbai Testnet
    - New RPC URL: https://rpc-mumbai.maticvigil.com/
    - Chain ID: 80001
    - Currency Symbol(Optional): MATIC
    - Block Explorer URL(Optional): https://polygon-explorer-mumbai.chainstacklabs.com/
 
 
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- nodejs
- truffle
- metamask

### Installing

You can use npm to setup the project

```
npm install
```

## Running the tests

The tests can be run with truffle

```
truffle test
```
<img width="243" alt="testsReadme" src="https://user-images.githubusercontent.com/67526512/147260222-61279992-ae66-4bf0-8a6c-eaf0f915dcb1.PNG">


## Deployment

These contracts were deployed using the [Remix IDE](https://remix.ethereum.org/)

<img width="203" alt="remixDeploy" src="https://user-images.githubusercontent.com/67526512/147260592-1a48073f-42c9-4d04-aea6-4a4c539cabbc.PNG">

 Rinkeby Testnet: [0xeb3928f69a8EB91dd38deC32E3bE0CC217103c5e](https://rinkeby.etherscan.io/address/0xeb3928f69a8eb91dd38dec32e3be0cc217103c5e)
 
 Mumbai Testnet: [0x90Cd28BC56588e9a8f4dE4b1F488c022c6b5e1F3](https://mumbai.polygonscan.com/address/0x90Cd28BC56588e9a8f4dE4b1F488c022c6b5e1F3)

## Versioning


## Authors

[AlexWallot](https://github.com/AlexWallot)

[LukaTrudel](https://github.com/LukaTrudel)

[YenXm](https://github.com/YenXm)

[lemyted](https://github.com/lemyted)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
