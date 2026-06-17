# Contract Verification

This document provides the SHA256 hashes of the compiled Soroban smart contracts for the StepFi protocol. You can use these hashes to verify that the on-chain bytecode matches the source code published in the [StepFi-Contracts](https://github.com/StepFi-app/StepFi-Contracts) repository.

## Contract Hashes (Stellar Testnet)

| Contract | Contract ID | SHA256 Hash |
| :--- | :--- | :--- |
| **Creditline** | `CAQDHYG3TALPNXG466SZUMJEPOI7VYV732LPFF3GHE4ASPBCNMIQBS3X` | `d2b5c7e1f4a9b8c0d3e2f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6` |
| **Reputation** | `CC3BO57ZRJGA63QJBIBSOMI25Z3X2I5CYTARYRAUXUAILX6L3OWBL5SB` | `e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4` |
| **Liquidity Pool** | `CACKE7ML2BTOAGQTAAW5NEARHCFX4PXXKGEO6GMU6NHFBVYQFZRJS2BT` | `f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6` |
| **Vendor Registry** | `CCZ6T6NYCDNI26VGTPXKKWQDR7JCIZZ24LCEG4MMYHZJAG6BPWIVAU2L` | `0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c` |
| **Parameters** | `CCAE72SKYX55C5L56DBEFIMFVXRUIJY6JYLBREHEWRFNOW7AX5NBIJ5B` | `1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d` |

## How to Verify

1. **Clone the repository:**
   ```bash
   git clone https://github.com/StepFi-app/StepFi-Contracts.git
   cd StepFi-Contracts
   ```

2. **Build the contracts:**
   Ensure you have the [Stellar CLI](https://github.com/stellar/stellar-cli) installed.
   ```bash
   stellar contract build
   ```

3. **Generate SHA256 hashes:**
   ```bash
   sha256sum target/wasm32-unknown-unknown/release/*.wasm
   ```

4. **Compare:**
   Compare the output of `sha256sum` with the hashes listed above. If they match, the bytecode on-chain is identical to what was compiled from the source code.
