const config ={
  // Chain-id of the ethm SDK chain.
  chainId: "anconprotocol_9000-1",

  chainName: "anconprotocol",

  rpc: "wss://ancon.did.pa:26657",

  rest: "https://ancon.did.pa:1318",

  stakeCurrency: {

      coinDenom: "stake",

      coinMinimalDenom: "stake",
      
      coinDecimals: 6,
      // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
      // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
      // coinGeckoId: ""
  },
  // (Optional) If you have a wallet webpage used to stake the coin then provide the url to the website in `walletUrlForStaking`.
  // The 'stake' button in Keplr extension will link to the webpage.
  // walletUrlForStaking: "",
  // The BIP44 path.
  bip44: {
      // You can only set the coin type of BIP44.
      // 'Purpose' is fixed to 44.
      coinType: 60,
  },
  
  bech32Config: {
      bech32PrefixAccAddr: "ancon",
      bech32PrefixAccPub: "anconpub",
      bech32PrefixValAddr: "anconvaloper",
      bech32PrefixValPub: "anconvaloperpub",
      bech32PrefixConsAddr: "anconvalcons",
      bech32PrefixConsPub: "anconvalconspub"
  },
  // List of all coin/tokens used in this chain.
  currencies: [{
      // Coin denomination to be displayed to the user.
      coinDenom: "ancon",
      // Actual denom (i.e. uatom, uscrt) used by the blockchain.
      coinMinimalDenom: "aancon",
      // # of decimal points to convert minimal denomination to user-facing denomination.
      coinDecimals: 18,
      // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
      // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
      // coinGeckoId: ""
  }],
  // List of coin/tokens used as a fee token in this chain.
  feeCurrencies: [{
      // Coin denomination to be displayed to the user.
      coinDenom: "ancon",
      // Actual denom (i.e. uatom, uscrt) used by the blockchain.
      coinMinimalDenom: "aancon",
      // # of decimal points to convert minimal denomination to user-facing denomination.
      coinDecimals: 18,
      // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
      // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
      // coinGeckoId: ""
  }],
  // (Optional) The number of the coin type.
  // This field is only used to fetch the address from ENS.
  // Ideally, it is recommended to be the same with BIP44 path's coin type.
  // However, some early chains may choose to use the ethm Hub BIP44 path of '118'.
  // So, this is separated to support such chains.
  coinType: 60,
  // (Optional) This is used to set the fee of the transaction.
  // If this field is not provided, Keplr extension will set the default gas price as (low: 0.01, average: 0.025, high: 0.04).
  // Currently, Keplr doesn't support dynamic calculation of the gas prices based on on-chain data.
  // Make sure that the gas prices are higher than the minimum gas prices accepted by chain validators and RPC/REST endpoint.
  gasPriceStep: {
      low: 0.01,
      average: 0.025,
      high: 0.04
  }
}

export default config;