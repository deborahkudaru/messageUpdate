import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("Message", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const Message = await hre.ethers.getContractFactory("Message");
    const message = await Message.deploy();

    return { message, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { message, owner, otherAccount } = await loadFixture(deployOneYearLockFixture);

      
    });

    it("Should set the right owner", async function () {
      const { message, owner } = await loadFixture(deployOneYearLockFixture);

      
    });

    

  });
});
