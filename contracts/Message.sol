// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Message {
   string public message;
   address public owner;

   event MessageUpdate(string message);

   constructor (){
    owner = msg.sender;
    message = "Hi, this is my fifth smart contract. Yayyyy";
   }

    function updateMessage(string calldata _message) external {
        message = _message;
        emit MessageUpdate(_message);
    }

    function readFunction() external view returns (string memory ){
        return message;
    }
}
