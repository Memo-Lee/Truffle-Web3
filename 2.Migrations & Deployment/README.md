# Migrations & Deployment
**Farkı 2 sözleşmeyi (contractları) tek bir deploydan dağıtmak. (We use 2 diffrent contract 1 deployment)**
## Step 1 - change contract -
`contracts > HelloWorld.sol` <br/>

``` solidity
     // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.17;

    contract HelloWorld {

        string public message;
        address owner;

        constructor(string memory _message){
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
 `contracts > HelloWorldSecond.sol` <br/>
 
 ``` solidity
     // SPDX-License-Identifier: MIT
      pragma solidity ^0.8.17;
      
      contract HelloWorldSecond {

          string public message;

          constructor(string memory _message){
              // değiştirelemeyen message
              message = _message;
          }
      }
  ```
  
## Step 3 - change migration -

`migrations > Hello_World_Migrations.js` <br/>

``` solidity
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
  ```
  
## Step 4 - contract run -
1. `truffle compile`
   - `truffle develop`
   - `migrate --reset`
   

## Bonus 
`truffle(develop)> instance = await HelloWorldSecond.deployed()`
``` solidity
   undefined
```
`truffle(develop)> instance.message()`
``` solidity
   'Hello world this is second contract text'
```

![This is an image](https://github.com/Memo-Lee/Truffle-Web3/blob/main/2.Migrations%20%26%20Deployment/img/Migrations%26Deploy.png)

