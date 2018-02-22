import getWeb3 from './getWeb3';

let web3;

getWeb3.then((results) => {
    console.log(results);
    web3 = results.web3;
    console.log("=====LOGGING web3======");
    console.log(web3);
}).catch((e) => {
    console.log(e);
    web3 = null;
});

