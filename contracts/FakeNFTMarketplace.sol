// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract FakeNFTMarketplace {
    // track of fake tokenids of owner addresses
    mapping(uint256 => address) public tokens;

    // price for each fake nft
    uint256 nftPrice = 0.0001 ether;

    function purchase(uint256 _tokenId) external payable {
        require(msg.value == nftPrice, "This NFT costs 0.0001 Ether");
        tokens[_tokenId] = msg.sender;
    }

    function getPrice() external view returns (uint256) {
        return nftPrice;
    }

    function available(uint256 _tokenId) external view returns (bool) {
        if(tokens[_tokenId] == address(0)) {
            return true;
        }
        return false;
    }
}