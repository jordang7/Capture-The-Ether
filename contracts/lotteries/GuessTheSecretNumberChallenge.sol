//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.3;

interface GuessTheSecretNumberChallenge {
    function guess(uint8 n) external payable;
}
