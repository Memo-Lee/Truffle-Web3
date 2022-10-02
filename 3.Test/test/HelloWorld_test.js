const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld",accounts => {
    // kontrol mekanizması için 'it' kullanılır.
    // 1. kontrol mekanizması (First control mechanism)
    it("consrructor should set the message correctly", async() =>{
        let instance = await HelloWorld.deployed();
        let message = await instance.message();
        // Hello_World_Migrations'a eşit olmalı
        assert.equal(message,"Hello world this is second contract text");
    })
    // 2. kontrol mekanizması (Second control mechanism)
    it("owner should be accounts[0]", async() =>{
        let instance = await HelloWorld.deployed();
        let owner = await instance.owner();
        // Hello_World_Migrations'a eşit olmalı (must be equal to Hello_World_Migrations)
        assert.equal(owner,accounts[0]);
    })
})
