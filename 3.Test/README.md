# TESTİNG
**Truffle Test**
## Step 1 - change contract -
`contracts > HelloWorld.sol` <br/>

``` solidity
     // SPDX-License-Identifier: MIT
     pragma solidity ^0.8.17;
     contract HelloWorld {

         string public message;
         address public owner;

         constructor(string memory _message){
             // Eğer böyle olsaydı sistem hata verirdi...
             // message = "CUSTOM MESSAGE"; 
             message = _message;
             owner = msg.sender;
         }
         function hello() public view returns(string memory) {
             return message;
         }
         function setMessage(string memory _message) public {
             require(msg.sender == owner);
             message = _message;
         }
     }
  ```

## Step 2 - create contract -
 `test > HelloWorld_test.js` <br/>
 
 ``` solidity
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
  ```
## Step 3 - contract run -
1. `truffle test`   


![This is an image](https://github.com/Memo-Lee/Truffle-Web3/blob/main/3.Test/img/Truffle%20Test.png)

