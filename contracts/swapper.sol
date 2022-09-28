// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "./PriceFeed.sol";


contract TokenSwapper is PriceConsumerV3 {

    
    
    address client = msg.sender;
    mapping(address => uint256) private _balanceOf;
    
    function swap(uint USDAmount) payable public {
        uint256 userBalance = _balanceOf[client];
        
        require(userBalance > USDAmount , "insufficient Balance");
        
        uint256 DodgeAmount = uint256(getLatestPrice()) * USDAmount;
        
        transferFrom(client, address(this), USDAmount);
        transferFrom(address(this), client, DodgeAmount);
        
    }

    function transferFrom(address from, address to, uint256 amount) private {
        _balanceOf[from] -= amount;
        _balanceOf[to] += amount;
    }


}