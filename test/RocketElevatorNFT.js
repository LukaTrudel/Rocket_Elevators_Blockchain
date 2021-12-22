var NFT = artifacts.require('NFT')

contract('NFT', function () {
    let baseURI
    let mint
    let isWhitelisted
    

    it('has a baseURI', async function () {
        assert.equal(await baseURI)
    })
    it('has a mint', async function () {
        assert.equal(await mint)
    })
    it('has clients whitelisted', async function () {
        assert.equal(await isWhitelisted)
    })
    before( async () => {
        NFT = await NFT.deployed();
    });
    it ("should get the current cost ", async () =>{
        const cost = await NFT.getCurrentCost();
        assert(cost != 0)
    })
    
})
