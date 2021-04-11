const { expect } = require("chai");
const { BigNumber } = require("ethers");
describe("EventWriter", function() {

  it("should allow me to write and then read", async function() {

    // define writer
    const EventWriter = await ethers.getContractFactory("EventWriter");

    // deploy
    const eventWriter = await EventWriter.deploy();
    
    // event listener
    let readEvents = new Promise((resolve, reject) => {
      
      // triggers when "Written" event is found
      eventWriter.on('Written', async (eventData, data) => {
        let receipt = await data.getTransactionReceipt()
        let block = await data.getBlock()
        let from = receipt.from

        let timestamp = block.timestamp

        // just for demonstration purposes
        console.log(
          "DEMO \n",
          "written by: ", from, "\n",
          "data: ", ethers.utils.parseBytes32String(eventData[0]), ethers.utils.parseBytes32String(eventData[1]), "\n",
          "UNIX timstamp: ", timestamp
        );
        resolve()
      })

       // After 30s, we throw a timeout error
       setTimeout(() => {
        reject(new Error('timeout while waiting for event'));
    }, 30000);
    })

    await eventWriter.deployed();

    let _data = [ethers.utils.formatBytes32String("test"), ethers.utils.formatBytes32String("123")]

    // write to Ethereum
    await eventWriter.write(_data)

    // read event log and demonstrate
    await readEvents;
  })
});
