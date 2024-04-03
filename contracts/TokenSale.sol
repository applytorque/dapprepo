// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenSale {
    IERC20 public ciccToken;
    IERC20 public usdtToken;

    address owner;
    uint256 public tokensPerUSDT = 1250; // Rate: 1 USDT = 0.0008 CICC

    constructor(address _ciccTokenAddress, address _usdtTokenAddress) {
        ciccToken = IERC20(_ciccTokenAddress);
        usdtToken = IERC20(_usdtTokenAddress);
        owner = msg.sender;
    }

    function buyTokens(uint256 _usdtAmount) public {
        uint256 tokenAmount = _usdtAmount * tokensPerUSDT;
        require(ciccToken.balanceOf(address(this)) >= tokenAmount, "Not enough CICC tokens in the contract");

        usdtToken.transferFrom(msg.sender, address(this), _usdtAmount);
        ciccToken.transfer(msg.sender, tokenAmount);
    }

    // Allow the owner to withdraw USDT and CICC from the contract
    function withdraw() public {
        require(msg.sender == owner, "Only the owner can withdraw");
        usdtToken.transfer(owner, usdtToken.balanceOf(address(this)));
        ciccToken.transfer(owner, ciccToken.balanceOf(address(this)));
    }

    // Function to update the token price, only callable by the owner
    function setTokensPerUSDT(uint256 _newRate) public {
        require(msg.sender == owner, "Only the owner can set the rate");
        tokensPerUSDT = _newRate;
    }
}
