# DataSymmetry
Target: Store SHA3 - 512bit (64Byte) on the Ethereum Blockchain.

## Dependancies
1. yarn commandline tool;
2. [Alchemy API Key](https://dashboard.alchemyapi.io/) or access ot an Ethereum node for advanced users;
3. [Ethereum Wallet e.g. Metmask](https://metamask.io/download) (Recommanded: Metamask);
4. [Blockchain Explorer e.g. Etherscan.io](https://etherscan.io/)
5. Top up your Ethereum Wallet to be able to pay for transactions by using a Faucet for a testnetwork or by using real Ether for mainnet deployment.

#**USE EXISTING WRITER CONTRACT**

IMPORTANT: You don't need to deploy the contract to the mainnet as it already is deployed and can be used under the 
Smart Contract address: 0x45f59310ADD88E6d23ca58A0Fa7A55BEE6d2a611. Ensure that you are formatting the data input correctly to follow the following structure: [0x$HEXVALUE32BYTE,0x$HEXVALUE32BYTE]. For a SHA3 64 Byte Hash you need to split it in two 32 Byte pieces and provide them in the correct format for the Smart Contract to accept your input.

#**DEPLOY YOUR OWN WRITER CONTRACT**

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
- for a list of all availabel scripts look at the file `package.json`
