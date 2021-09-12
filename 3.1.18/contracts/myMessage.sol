pragma solidity ^0.4.24;

contract DoesDustyEatAss {
    string myMessage;

    function setMessage(string z) public {
        myMessage = z;
    }

    function getMessage() public view returns (string) {
        return myMessage;
    }
}