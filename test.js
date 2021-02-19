const { Chromeless } = require('chromeless')
var startTime;
var endTime;

// add all URLs you want to visit here
const urls = [];

async function run() {
    const chromeless = new Chromeless();
    startTime = Date.now();
    for (var i = 0; i < urls.length; i++) {
    const screenshot = await chromeless
        .goto(urls[i])
        // .screenshot()
    }
    await chromeless.end()
    endTime = Date.now();
    console.log((endTime - startTime)/1000 + "s");
}

run().catch(console.error.bind(console));
