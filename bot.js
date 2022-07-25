require('dotenv').config();
const Web3 = require('web3');

const web3 = new Web3("https://rinkeby.infura.io/v3/17342b0f3f344d2d96c2c89c5fddc959");


const { PRIVATE_KEY } = process.env;

const receiver = "0x1fa8ADa160db1c9bda618238521b88E9b2c5b9Cf"


const main = async () => {
    const account = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
    const address = account.address;
    console.log(address);

    const transaction = {
        'to': receiver,
        'value': 1000000000000000,
        'gas': 30000,
        // 'maxFeePerGas': 1000000108,
        // 'nonce': nonce,
        // 'data': 'testTransaction'
        // optional data field to send message or execute smart contract
       };
    
    // const tx = contract.methods.transfer(address, amount.toString())
    const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
    const receipt  = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    await receipt
}


main()
