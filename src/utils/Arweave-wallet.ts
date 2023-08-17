import { ArweaveWebWallet } from 'arweave-wallet-connector'

const wallet = new ArweaveWebWallet({
    // optionally provide information about your app that will be displayed in the wallet provider interface
    name: 'Your application name',
    logo: 'URL of your logo to be displayed to users'
})
wallet.setUrl('arweave.app')
export default wallet