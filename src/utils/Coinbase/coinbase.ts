import crypto from 'crypto';
import axios from 'axios';
import querystring from 'querystring';

// Enums
import { AccountsResponse, Method, CreateAddressResponse } from '~/utils/Coinbase/coinbase.enum';

// Coinbase API
const accessTokenUrl = 'https://www.coinbase.com/oauth/token';
const apiUrl = 'https://api.coinbase.com/v2'
const clientIdVivi = '964edbb5e2ca902383a60351c7885135a56bc27131e5046321d0d297e97a45a5';
const clientSecretVivi = '1f83b97a2af8da90cfdc00d9803f22f9ae575bbc188c6a69a5dfb8414027d35b'
let token = 'ad52769a04240c2550deb51b560b8958de24632cb8d9db60dc09abf580795715'
let usdcAccountId = '';
let addressId = '';

// https://www.coinbase.com/oauth/authorize?client_id=964edbb5e2ca902383a60351c7885135a56bc27131e5046321d0d297e97a45a5&redirect_uri=http%3A%2F%2Flocalhost&response_type=code&scope=wallet%3Auser%3Aread,wallet%3Aaccounts%3Aread,wallet%3Aaddresses%3Aread,wallet%3Aaddresses%3Acreate
// scope=wallet%3Auser%3Aread,wallet%3Aaccounts%3Aread,wallet%3Aaddresses%3Aread,wallet%3Aaddresses%3Acreate

// Exchange/Pro API
const apiKey = '4efb9e88935844478c24f6d418b650dc';
const apiSecret = 'KI+QiDiQ1tFqLQdkRaw+ciHT4NJxR3mka6FHJfIuqUGjJ2pq8WjcTEQFc82+VqAgjjpLESm5V/JxS4xfydA09A=='
const passphrase = 'iwkd4m4yyak'

export const getAddressBook = async () => {
  const currentTimeInSecs = Math.floor(Date.now() / 1000);
  
  const req = {
    method: Method.GET,
    path: '/address-book',
    body: ''
  };

  const message = currentTimeInSecs + req.method + req.path + req.body;

  // decode the base64 secret
  const key = Buffer.from(apiSecret, 'base64');
  
  // create a sha256 hmac with the secret
  const hmac = crypto.createHmac('sha256', key);
  
  // sign the require message with the hmac and base64 encode the result
  const cb_access_sign = hmac.update(message).digest('base64');

  const options = {
    url: `https://api.exchange.coinbase.com${req.path}`,
    method: req.method,
    headers: {
      'CB-ACCESS-KEY': apiKey,
      'CB-ACCESS-PASSPHRASE': passphrase,
      'CB-ACCESS-TIMESTAMP': currentTimeInSecs,
      'CB-ACCESS-SIGN': cb_access_sign,
    }
  };

  axios(options).then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log('error');
    console.log(error.response)
  })
}

export const getCurrencyInfo = async () => {
  const currentTimeInSecs = Math.floor(Date.now() / 1000);
  
  var req = {
    method: Method.GET,
    path: '/currencies/USDC',
    body: ''
  };

  var message = currentTimeInSecs + req.method + req.path + req.body;

  // decode the base64 secret
  let key = Buffer.from(apiSecret, 'base64');
  
  // create a sha256 hmac with the secret
  let hmac = crypto.createHmac('sha256', key);
  
  // sign the require message with the hmac and base64 encode the result
  let cb_access_sign = hmac.update(message).digest('base64');

  const options = {
    url: `https://api.exchange.coinbase.com${req.path}`,
    method: req.method,
    headers: {
      'CB-ACCESS-KEY': apiKey,
      'CB-ACCESS-PASSPHRASE': passphrase,
      'CB-ACCESS-TIMESTAMP': currentTimeInSecs,
      'CB-ACCESS-SIGN': cb_access_sign,
    }
  };

  axios(options).then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log('error');
    console.log(error.response)
  })
}

export const apiExchangeTransfer = async () => {
  const currentTimeInSecs = Math.floor(Date.now() / 1000);
  
  var req = {
    method: Method.POST,
    path: '/withdrawals/crypto',
    body: JSON.stringify({
      amount: '10',
      currency: 'USDC',
      crypto_address: '0xbd66245f861baeecac5cb013f5f24530ae0473bd',
      network: 'ethereum-mainnet'
    })
  };

  var message = currentTimeInSecs + req.method + req.path + req.body;

  // decode the base64 secret
  let key = Buffer.from(apiSecret, 'base64');
  
  // create a sha256 hmac with the secret
  let hmac = crypto.createHmac('sha256', key);
  
  // sign the require message with the hmac and base64 encode the result
  let cb_access_sign = hmac.update(message).digest('base64');

  const options = {
    url: `https://api.exchange.coinbase.com${req.path}`,
    method: req.method,
    headers: {
      'CB-ACCESS-KEY': apiKey,
      'CB-ACCESS-PASSPHRASE': passphrase,
      'CB-ACCESS-TIMESTAMP': currentTimeInSecs,
      'CB-ACCESS-SIGN': cb_access_sign,
    },
    data: {
      amount: '10',
      currency: 'USDC',
      crypto_address: '0xbd66245f861baeecac5cb013f5f24530ae0473bd',
      network: 'ethereum-mainnet'
    }
  };

  axios(options).then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log('error');
    console.log(error.response)
  })
}

export const apiPrime = async () => {
  const currentTimeInSecs = Math.floor(Date.now() / 1000);
  
  var req = {
    method: Method.GET,
    path: '/v1/portfolios',
    body: ''
  };

  var message = currentTimeInSecs + req.method + req.path + req.body;

  // decode the base64 secret
  let key = Buffer.from(apiSecret, 'base64');
  
  // create a sha256 hmac with the secret
  let hmac = crypto.createHmac('sha256', key);
  
  // sign the require message with the hmac and base64 encode the result
  let cb_access_sign = hmac.update(message).digest('base64');

  const options = {
    url: `https://api.prime.coinbase.com${req.path}`,
    method: Method.GET,
    headers: {
      'X-CB-ACCESS-KEY': apiKey,
      'X-CB-ACCESS-PASSPHRASE': '4vy5alhg1s9',
      'X-CB-ACCESS-TIMESTAMP': currentTimeInSecs,
      'X-CB-ACCESS-SIGNATURE': cb_access_sign,
    }
  };

  axios(options).then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log('error');
    console.log(error.response)
  })
}

export const getToken = async (code: string) => {
  const data = {
    grant_type: 'authorization_code',
    code,
    client_id: clientIdVivi,
    client_secret: clientSecretVivi,
    redirect_uri: 'http://localhost',
  };
  
  const searchParams = querystring.stringify(data);

  const options = {
    url: `${accessTokenUrl}?${searchParams}`,
    method: Method.POST,
  };

  axios(options).then(function (response) {
    // handle sucess
    if (response.data.access_token) {
      console.log(response.data);
      console.log('tiene token');
      if (!token) {
        token = response.data.access_token;
      }
    }
  })
  .catch(function (error) {
    // handle error
    console.log('error');
    console.log(error.response.data)
  })
}

export const getWalletUsdcAccount = async () => {
  try {
    const options = {
      url: `${apiUrl}/accounts`,
      method: Method.GET,
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };
  
    const { data } = await axios(options);
    const { data: accounts }: AccountsResponse = data;

    const usdcAccount = accounts.filter(account => account.type === 'wallet' && account.id === 'USDT');
    console.log(accounts);
    console.log(usdcAccount);
    if (usdcAccount.length > 0) {
      console.log(usdcAccount[0]);
      usdcAccountId = usdcAccount[0].id;
    };

  } catch(error) {
    console.log(error)
  }
}

export const createAddressByAccount = async () => {
  try {
    const options = {
      url: `${apiUrl}/accounts/USDC/addresses`,
      // url: `${apiUrl}/accounts/${usdcAccountId}/addresses`,
      method: Method.POST,
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: {
        name: 'prueba',
        address: '877'
      }
    };
  
    const accounts: CreateAddressResponse = await axios(options);
    const { data } = accounts;
    addressId = data.id;
    console.log(data);
  } catch(error: any) {
    console.log(error)
    console.log(error.data)
  }
}

export const listAllAddress = async () => {
  try {
    const options = {
      url: `${apiUrl}/accounts/USDC/addresses`,
      method: Method.GET,
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };
  
    const accounts = await axios(options);
    console.log(accounts.data.data)
  } catch(error: any) {
    console.log(error)
    console.log(error.data)
  }
}
