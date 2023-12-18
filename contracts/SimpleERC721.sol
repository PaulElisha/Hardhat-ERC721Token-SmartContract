// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ZEUS is ERC721, Ownable {
    constructor() ERC721("ZEUS", "ZES") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.ioipfs/QmVoh2pCFf7YgmaH73RJgWx6i9FRNjm6joxRG9E5rTYg6o";
    }

    function safeMint(uint256 tokenId) public onlyOwner {
        _safeMint(msg.sender, tokenId);
    }

    function tokenURI(uint256 tokenId) public view  override returns (string memory) {
        _requireMinted(tokenId);

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI)) : "";
    }

}
