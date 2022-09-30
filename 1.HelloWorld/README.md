# Hello World
**Truffle install , contract create , contrat deploy , contract run ** 

## - Truffle W10 install-
1. `npm install -g truffle`
   - `truffle init` 

## Step 1 - create contract -
 `contacts > HelloWorld.sol` <br/>
  // SPDX-License-Identifier: MIT <br/>
  pragma solidity ^0.8.17;  <br/>
  contract HelloWorld { <br/>
      function hello() public pure returns(string memory) { <br/>
          return "Hello World"; <br/>
      }
  }
## Step 2 - contract deploy -
 `migrations > 1_Hello_World_Migrations.js` <br/>
  const HelloWorld = artifacts.require("HelloWorld"); <br/>
  module.exports = function(deployer){ <br/>
    deployer.deploy(HelloWorld); <br/>
}
## Step 3 - contract run -
1. `truffle develop`
   - `truffle migrate`
