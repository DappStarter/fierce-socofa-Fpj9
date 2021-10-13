require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan rifle rural hospital grid another army giant'; 
let testAccounts = [
"0x2aea24f73592778b0317d1a01d8c2d88d137c742125c965c087357f705ab6e9f",
"0xee810b2959cc297a5be2b1dc13eb556d203302a25ca8dbdbc800c7dcea921fa6",
"0x7b62c5ea2f4bc334dd855cecb60e1681d1a6ebeba3d3eea5e4473d130af8d218",
"0x3526899af540098344513b1f37c5391010cf964ab629d73ab2f4bf5201f536e0",
"0x67fbe8604cf9a26e333b202b50bae2bc3a7b7a59bc4f300c890e0d27e6309219",
"0xb782a134868875b511c34a3bac5c364160d1c5b0027247711404e29a3b833de4",
"0x2cc5c2a75a56fff3a6074dbe98d6ed2db589c7cf432b4a234d33c8cb18528a2c",
"0xaad132dcff46678c85c153af5ae732b5a3f099b4da316f8fb60acfd7d19b3bf2",
"0x2900a274802b96d86304c10caf1c57855f77ff724078dd1ddd967fef6d8f3ac6",
"0xdf83c54f7ed1768d37011dfe706c01a60e239468942b1e239101d06948ea6ede"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


