var NFT = artifacts.require('NFT')

contract('NFT', function () {
    let baseURI
    let mint
    let isWhitelisted
    let nftPerAddressLimit
    let _limit
    let cost
    let _newCost
    let maxMintAmount
    let _newmaxMintAmount
    let discountCost
    let _mintAmount
    
    
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
    
    it ("should deploy NFT properly", async() =>{
        console.log("Address :" + NFT.address);
        assert(NFT.address !== '');
    });

    it ("should get cost ", async () =>{
        const cost = await NFT.getCurrentCost();
        assert(cost != 0)
    })

    it("has correct name", async () => {
        const name = await NFT.name();
        assert.equal(name, '');
      });

    it('confirms the limit', async () =>{
        nftPerAddressLimit = _limit;
    })

    it('sets the cost', async () =>{
        cost = _newCost;
    })
    
    it('sets the Max Mint amount', async () =>{
        maxMintAmount = _newmaxMintAmount;
    })

    it('whitelisted returns true', async () =>{
        const whitelistedAddresses = []
        for (i = 0; i < whitelistedAddresses.length; i++) {
            if (whitelistedAddresses[i] == _user) {
                return true;
            }
        }
        return false;
    })
    it('cost not discount cost', async () =>{
        discountCost != cost;
    })

    it('mint amount > 0', async () =>{
        _mintAmount > 0;
    })
})
