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
## Step 3 - contract run -
1. `truffle develop`
   - `migrate --reset`
   
   

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
