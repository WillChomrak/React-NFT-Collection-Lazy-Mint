In progress

# React-NFT-Collection-Lazy-Mint
A Web3 enabled React website that can interact with your NFT collection contract and lazy mint

This is a fully functional react built website with Web3 integration for lazy minting an NFT collection. 

There are an endless number of things to customize here so I'm not going to go through everything. Just the Web3 configuration and maybe a few other things I decide along the way. Other than that, you can get the rest of the site looking the way you like with some basic web dev skills.

<h2>Configuration</h2>

There is one main file where the Web3 magic is happening and two others that are supporting players. That main file is "/src/Web3Client.js". The supporting files are "config.js" and the "MintPage.js" component. Web3Client.js holds all the logic for communicating with the blockchain. Fortunately, much of the heavy lifting is taken care of by the Metamask Wallet in your browser (the actual transaction), but the website (this file) initiates the transaction for Metamask to carry out.

Frankly, you don't actually need to understand the logic in this file, but if you're interested I'll go into it briefly after explaining the configuration. 

First you need to configure the code for your price and your contract.
In the config.js file there are two variables. CONTRACT_ABI must be set to the contract ABI - the code we copied from remix when deploying our contract. This is a long string so make sure you get it all. CONTRACT_ADDRESS must be set to the contract address. You can also find this in the RemixIDE. You must configure both of these to match your contract.
You must also set the price per token. This is the loooong number in the return phrase of the mintToken function in the Web3Config.js file. The number in there now is 1,000,000,000 Gwei (gigawei) which actually means 1 MATIC or 1 ETH depending which chain you are using. 

After configuring these 3 things for your project the Web3 integration should work!

<h2>A bit more detail</h2>

So, what is going on here:
The init function first checks if there is an Ethereum browser wallet connected to the site. This does not specifically check that the wallet is MetaMask. I chose not to go deep into the weeds on this and only promised compatibility with MetaMask, 
so I would recommend cautioning users in the front-end that only MetaMask will work (even if some other browser wallets mights work too).
It then retrieves the selected account in the MetaMask wallet and sets it to "selectedAccount". It then uses your ABI and contract address from the config.js file to connect with the contract. 

The mintToken() function confirms init() has run, and then returns a call to the contract mint() function and sends a request to MetaMask to send the contract the specified amount of MATIC (currently set to 1 MATIC) from the selected account. The rest is handled by MetaMask. 

If the transaction works you will see a success message.

This is a bare bones explanation and I will try to come back here to make this more thorough.

Note: after purchase, you will need to import the token before you see it in your MetaMask wallet. 












