// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title AquaWitness - Gas-optimized hash witnessing for Aqua Protocol
/// @notice Supports both SHA3-256 (32 bytes) and SHA3-512 (64 bytes) hashes
/// @dev Deployed at 0x269Ff9a5CB9BD5319bd95b248d2579Aa1e9D78FE (ETH mainnet)
contract AquaWitness {
    event Witnessed(bytes32 indexed hash1, bytes32 indexed hash2);

    /// @notice Witness a SHA3-256 hash (32 bytes). Calldata: 36 bytes.
    function witness(bytes32 hash) external {
        emit Witnessed(hash, bytes32(0));
    }

    /// @notice Witness a SHA3-512 hash (64 bytes, split into two halves). Calldata: 68 bytes.
    function witness(bytes32 hash1, bytes32 hash2) external {
        emit Witnessed(hash1, hash2);
    }
}
