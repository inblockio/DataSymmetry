# DataSymmetry
## Install
`yarn`
## Test
`yarn run test`

## Deploy
### Local test environment
**prepare**: get a local node with `npm run node` 

**deploy**: `yarn run testWriterDeploy` or `yarn run testEventWriterDeploy`

### Ropsten
**prepare**: replace `ALCHEMY_API_KEY` and `ROPSTEN_PRIVATE_KEY` in `hardhat.config.js`

**deploy**: `yarn run goerliWriterdeploy` or `yarn run goerliEventWriterDeploy`

configuration is provided to deploy on ropsten and mainnet as well (see `hardhat.config.js`)