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