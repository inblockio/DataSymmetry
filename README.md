# DataSymmetry
Target: Store SHA3 - 512bit (64Byte) on the Ethereum Blockchain.

**Context**: To be able to proof ownership over data, it is essential to entanglement the data with Account and Time to be able to put Data into Spacetime.
This is a MVP which proofs that the owner of the Wallet (Account) wrote a SHA3 Hash of a data structure to the main-chain and with it entangles it with time through the transaction done and witnessed on the Ethereum Blockchain. The SHA3 Hash can be the result of a file or a merkle-tree. With the source data statically stored and preserved it is possible to proof the existence and potential ownership over that digital asset.

## Dependencies
1. yarn command line tool;
2. sha3sum command line tool (-a 512) $FILENAME
3. [Alchemy API Key](https://dashboard.alchemyapi.io/) or access to an Ethereum node for advanced users;
4. [Ethereum Wallet e.g. Metamask](https://metamask.io/download) (Recommended: Metamask);
5. [Blockchain Explorer e.g. Etherscan.io](https://etherscan.io/)
6. Top up your Ethereum Wallet to be able to pay for transactions by using a Faucet for a test network or by using real Ether for mainnet deployment.

# Use existing event writer contract

IMPORTANT: You don't need to deploy the contract to the mainnet as it already is deployed and can be used under the 
Smart Contract address: 0x45f59310ADD88E6d23ca58A0Fa7A55BEE6d2a611, in both the mainnet and Görli testnet.

The steps are:
1. Make sure you have the Metamask extension ready in your web browser.
2. Generate the SHA3 hash of your file. On a Linux command line, you can do `sha3sum -a 512 $FILENAME`. Alternatively, to obtain the SHA3 of a text, you can do it online at [Generate SHA3 Online](https://www.browserling.com/tools/sha3-hash). We also have a shell script in the [scripts folder](https://github.com/FantasticoFox/DataSymmetry/tree/main/scripts) that let you do step 2 and step 3 in one go: just do `./scripts/gethashsum.sh $FILENAME`.
3. To prepare for the input to the smart contract, for a SHA3 64 Byte Hash you need to split it in two 32 byte pieces and provide them in the correct format for the smart contract to accept your input. You can do it online at [Count Characters Online](https://www.charactercountonline.com/).
4. Go to https://etherscan.io/address/0x45f59310ADD88E6d23ca58A0Fa7A55BEE6d2a611#writeContract (mainnet) or https://goerli.etherscan.io/address/0x45f59310ADD88E6d23ca58A0Fa7A55BEE6d2a611#writeContract (Görli testnet).
5. Connect to Web3 (choose Metamask). If the contract is on Görli testnet, make sure the Metamask wallet network choice is also Görli testnet. Sometimes you need to press the connect button a second time if the first attempt fails.  
6. In the input field ("data (bytes32[2])"), enter the two 32 byte pieces in the format of [0x$HEXVALUE32BYTE1,0x$HEXVALUE32BYTE2] (e.g. `[0x678655c1f91fb4dbb27e1450fb41bcfd0209339c3493c595ab1fc294dd7a04eb,0x23dc74934aa2229d990b8eb92f8f89528667b7c604548f134c950b0edda374ef]`) and then click the "Write" button.

# Deploy your own (event) writer contract

## Test
`yarn run test`

## Deploy
### Local test environment
**prepare**: get a local node with `npm run node` 

**deploy**: `yarn run testWriterDeploy` or `yarn run testEventWriterDeploy`

### Ropsten
**prepare**: replace `ALCHEMY_API_KEY` and `ROPSTEN_PRIVATE_KEY`* in `hardhat.config.js`
`*You need to export a Ethereum Wallet Private Key from your Ethereum Wallet and copy it over to your script.`

**deploy**: `yarn run goerliWriterDeploy` or `yarn run goerliEventWriterDeploy`
            `yarn run mainnetWriterDeploy` or `yarn run mainnetEventWriterDeploy`

- configuration is provided to deploy on ropsten and mainnet as well (see `hardhat.config.js`)
- for a list of all available scripts look at the file `package.json`
