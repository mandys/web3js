import getWeb3 from './getWeb3';

let web3;

getWeb3.then((results) => {
    console.log(results);
    web3 = results.web3;
    console.log("=====LOGGING web3======");
    console.log(web3);
    // check if metamask is not installed, throw alert and exit
    // find which network is user connected to ?
    // list all user accounts from metamask
    // pull balance of the eth0 (coinbase) account
}).catch((e) => {
    console.log(e);
    web3 = null;
});

