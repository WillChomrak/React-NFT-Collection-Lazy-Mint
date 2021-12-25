import Web3 from 'web3';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from './config';

let selectedAccount;
let nftContract;
let isInitialized = false;

export const init = async () => {
    let provider = window.ethereum;

    if (typeof provider !== 'undefined') {
        // Metamask is installed

        provider.request({method: 'eth_requestAccounts'}).then(accounts => {
            selectedAccount = accounts[0];
            // console.log(`selected account is ${selectedAccount}`);
        }).catch(err => {
            console.log('THE ERR: ', err);
            return
        });
        
        window.ethereum.on('accountsChanged', function(accounts) {
            selectedAccount = accounts[0];
            // console.log(`selected account is changed to ${selectedAccount}`);
        })
    }

    const web3 = new Web3(provider);

    const networkId = await web3.eth.net.getId() 
    console.log(networkId);

    nftContract = new web3.eth.Contract(
        CONTRACT_ABI, CONTRACT_ADDRESS 
        );
    isInitialized = true;
    console.log("inside: ", nftContract);

}

export const mintToken = async () => {

    if (!isInitialized) {
        await init();
    }
    return nftContract.methods.mint(selectedAccount, 1).send({ from: selectedAccount, value: '1000000000000000000'}) // This is 1 MATIC or 1 ETH depending on the chain you choose 
}