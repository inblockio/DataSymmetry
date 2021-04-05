const { expect } = require("chai");
const { BigNumber } = require("ethers");
describe("Greeter", function() {

  // 2 different Ethereum accounts

  it("should allow me to write and then read", async function() {

    // define writer
    const Writer = await ethers.getContractFactory("Writer");

    // deploy
    const writer = await Writer.deploy();
    
    // event listener
    let readEvents = new Promise((resolve, reject) => {
      
      // triggers when "Written" event is found
      writer.on('Written', async (index, storedData, data) => {
        let receipt = await data.getTransactionReceipt()
        let block = await data.getBlock()
        let from = receipt.from
        let _index = index
        let _data = storedData

        let timestamp = block.timestamp

        // just for demonstration purposes
        console.log(
          "DEMO \n",
          "written by: ", from, "\n",
          "index: ", BigNumber.from(_index).toString(), "\n",
          "data: ", ethers.utils.parseBytes32String(_data[0]), ethers.utils.parseBytes32String(_data[1]), "\n",
          "UNIX timstamp: ", timestamp
        );
        resolve()
      })

       // After 30s, we throw a timeout error
       setTimeout(() => {
        reject(new Error('timeout while waiting for event'));
    }, 30000);
    })

    await writer.deployed();

    let _data = [ethers.utils.formatBytes32String("test"), ethers.utils.formatBytes32String("123")]

    // write to Ethereum
    await writer.write(_data)

    // read contract storage
    expect((await writer.read(0))[0]).to.equal(_data[0]);
    expect((await writer.read(0))[1]).to.equal(_data[1]);

    // read event log and demonstrate
    await readEvents;

  })
});
