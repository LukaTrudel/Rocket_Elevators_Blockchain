const { assert } = require("chai")

var NFT = artifacts.require('NFT')


contract('NFT', function () {
    let baseURI
    let mint
    let isWhitelisted
   
    
    before( async () => {
        NFT = await NFT.deployed();
    });

    it('has a baseURI', async function () {
        assert.equal(await baseURI)
    })

    it('has a mint', async function () {
        assert.equal(await mint)
    })

    it('has whitelisted', async function () {
        assert.equal(await isWhitelisted)
    })

    //Deploy test
    it ("should deploy NFT properly", async() =>{
        console.log("Address :" + NFT.address);
        assert(NFT.address !== '');
    });

    //test that confirms the name
    it("has correct name", async () => {
        const name = await NFT.name();
        assert.equal(name, '');
    });
    
    //test that confirms the NFT limit per address
    it('confirms the limit per address', async () =>{
        var nftPerAddressLimit = await NFT.nftPerAddressLimit();
        assert.equal(nftPerAddressLimit, 3);
    })

    //test that confirms the maxSupply
    it('confirms the maxSupply', async () =>{
        var maxSupply = await NFT.maxSupply();
        assert.equal(maxSupply, 1000);
    })

    //test that confirms the maxMintAmount
    it('confirms the maxMintAmount', async () =>{
        var maxMintAmount = await NFT.maxMintAmount();
        assert.equal(maxMintAmount, 10);
    });

    //test that confirms the sales start time
    it('confirms the sales start', async () =>{
        var saleStart = await NFT.saleStart();
        assert.equal(saleStart, 1640390399);
    })

    //test that confirms the sales end time
    it('confirms the sales end', async () =>{
        var saleEnd = await NFT.saleEnd();
        assert.equal(saleEnd, 1640908799);
    })


    //test that user is minting ast least 1 NFT
    it('mint amount', async function () {
        try {
            await NFT.mint.sendTransaction(0);
        }
        catch (err) {
            assert.equal("need to mint at least 1 NFT", err.reason);
        }
    });

    //test that max mint amount per session exceeded
    it('mint amount2', async function () {
        try {
            await NFT.mint.sendTransaction(1);
        }
        catch (err) {
            assert.equal("max mint amount per session exceeded", err.reason);
        }
    });

    //test that max NFT limit exceeded
    it('mint amount3', async function () {
        try {
            await NFT.mint.sendTransaction(2);
        }
        catch (err) {
            assert.equal("max NFT limit exceeded", err.reason);
        }
    });

    //check to see if address is whitelisted to mint
    it('address not whitelisted', async function () {
        try {
            await NFT.mint.sendTransaction(3);
        }
        catch (err) {
            assert.equal("address not whitelisted", err.reason);
        }
    });

    //check to see if there are enough funds to mint
    it('enough funds to mint', async function () {
        try {
            await NFT.mint.sendTransaction(4);
        }
        catch (err) {
            assert.equal("insufficient funds", err.reason);
        }
    });

    //check to see if token exists
    it('token exists', async function () {
        try {
            await NFT.tokenURI.sendTransaction(0);
        }
        catch (err) {
            assert.equal("ERC721Metadata: URI query for nonexistent token", err.reason);
        }
    });
})
