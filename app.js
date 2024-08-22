const withPuppeteer = require("./withPuppeteer");
// const withSerpApi = require("./withSerpApi");

withPuppeteer.getLocalPlacesInfo().then((result) => console.dir(result, { depth: null }));

// withSerpApi.getResults().then((result) => console.dir(result, { depth: null }));
 
