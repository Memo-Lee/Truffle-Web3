// 2 tane contract 1 Deployment
const HelloWorld = artifacts.require("HelloWorld");
const HelloWorldSecond = artifacts.require("HelloWorldSecond");
// farkı sözleşmeleri (contractları) tek bir deploydan çağırmak. (we use 2 diffrent contract 1 deployment)
module.exports = function(deployer){
    // then 2 contract için kullanılır. (then : We use for two contract)
    deployer.deploy(HelloWorld,"Hello world constructor").then(async() =>{
        let instance = await HelloWorld.deployed();
        let message = instance.message();
        return deployer.deploy(HelloWorldSecond,message)
    })
};