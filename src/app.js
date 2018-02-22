import getWeb3 from './getWeb3';

let web3;

getWeb3.then((results) => {
    //console.log(results);
    web3 = results.web3;
    console.log("=====LOGGING web3======");
    console.log(web3);
    checkMetamaskInstalled();
    // check if metamask is not installed, throw alert and exit
    // find which network is user connected to ?
    // list all user accounts from metamask
    // pull balance of the eth0 (coinbase) account
}).catch((e) => {
    console.log(e);
    web3 = null;
});

const checkMetamaskInstalled = () => {
    if(web3.currentProvider.isMetaMask == true) {
        checkConnection();
    } else {
        alert("you have no metamask! Please install it.");
    }
}

const checkConnection = () => {
    if(!web3.isConnected()) {
        console.log('not connected to any network');
     } else {
        console.log('connected');
        checkNetwork();
     }
}

const checkNetwork = () => {
    web3.version.getNetwork((err, netId) => {
        switch (netId) {
          case "1":
            console.log('This is mainnet')
            break
          case "2":
            console.log('This is the deprecated Morden test network.')
            break
          case "3":
            console.log('This is the ropsten test network.')
            break
          case "4":
            console.log('This is the Rinkeby test network.')
            break
          case "42":
            console.log('This is the Kovan test network.')
            break
          default:
            console.log('This is an unknown network.')
        }
        getAccount();
      },(err) => {
          console.log(err);
      })
}

const getAccount = () => {
    web3.eth.getAccounts((error, result) => { 
        if(!result.length) {
            alert("your metamask is locked please unlock it");
        } else {
            console.log(result);
        }
    },(err) => {
        console.log(err);
    });
}

