# Hello World
**Truffle install , contract create , contrat deploy , contract run ** 

## - Truffle W10 install-
1. `npm install -g truffle`
   - `truffle init` 

## Step 1 - create contract -
`contacts > HelloWorld.sol` 
``` solidity
   
     // SPDX-License-Identifier: MIT
     pragma solidity ^0.8.17;  
     contract HelloWorld { 
         function hello() public pure returns(string memory) { 
             return "Hello World"; 
         }
     }
  ```

## Step 2 - contract deploy -
 `migrations > 1_Hello_World_Migrations.js` <br/>
 ``` solidity
     const HelloWorld = artifacts.require("HelloWorld"); <br/>
     module.exports = function(deployer){ <br/>
       deployer.deploy(HelloWorld); <br/>
   }
  ```
## Step 3 - contract run -
1. `truffle develop`
   - `truffle migrate`

## Bonus 
`truffle(develop)> let instance = await HelloWorld.deployed()`
``` solidity
   undefined
```
`truffle(develop)> instance.hello()`
``` solidity
   'Hello World'
```

![This is an image](https://github.com/Memo-Lee/Truffle-Web3/blob/main/1.HelloWorld/img/helloworld.png)
