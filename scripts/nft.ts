import { ethers } from "hardhat";

const main = async () => {
  const nft = await ethers.deployContract("ZEUS");

  await nft.waitForDeployment();
  console.log(nft.target);

  // const user = "0x24aa0E53a279D64AD7aaf49F7c420F8193967502";

  // const userSigner = await ethers.getImpersonatedSigner(user);

  // const interact = await ethers.getContractAt(
  //   "INFT",
  //   "0x9364870D1cEcDffa5b493363ab62002053748B0D"
  // );

  // const nftCID = "QmWFADeXjSYis3UsDRsKh4b5FLvrfkRZtT89Yu3ZYFCdCV";

  // const play = await interact.connect(userSigner).safeMint(nftCID);

  // console.log(await ethers.formatUnits(String(play)));
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
