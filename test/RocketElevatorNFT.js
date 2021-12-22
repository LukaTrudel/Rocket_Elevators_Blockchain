const NFT = artifacts.require('NFT')

contract('NFT', function () {
    let baseURI

    it('has a baseURI', async function () {
        assert.equal(await baseURI)
    })
})