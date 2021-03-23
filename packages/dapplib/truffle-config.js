require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'jazz enter boil food champion rescue machine erosion grunt light army gaze'; 
let testAccounts = [
"0xdfaf9e00540b856b118733dc68eb752635d81f631bc78837e185b50757830cdc",
"0x6f9b8192a96a5d4769d0506abfc4aa86d9d3f3c99732c45a45360a312381b91a",
"0xc5e6cc41342604e932a0383b063a71047c5c8fa0583906bdd6cc814684928993",
"0x866ba81bc32fa57bb3eebecaff765bdfe9a14f90d66dd72699bf265a529a7286",
"0x589a0a073c03b59e15d1d2c4cb919eb925f060b48e768921962cd3b4b0bb4f11",
"0xec84a3c8dfb03e6f4f200845bd24517863c431890c41796d90cca762bc3d8f02",
"0x290c5638644e5809a752c914762632ded9426f2ed7b3a33b4ce01db2105e7932",
"0x553bdff52b37170a71592bd41a1de0c468907f88f0eea092551107facddc76ed",
"0x4b8cc3b2dc26e037a7186d9155f6ff28fb8f69bcca812b293eb72d597f636b90",
"0x81b6bfc2fed94d24ef27ffe07c76055e784847a716103bf07844edb0eba158a6"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

