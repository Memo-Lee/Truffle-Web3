// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;


contract HelloWorldSecond {
    
    string public message;

    constructor(string memory _message){
        // değiştirelemeyen message
        message = _message;
    }
}