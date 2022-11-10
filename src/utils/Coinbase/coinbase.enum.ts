export const enum Method {
  GET = 'GET',
  POST = 'POST',
}

export interface AccountsResponse {
  data: [
    {
      id: string;
      name: string;
      primary: boolean;
      type: 'vault' | 'wallet';
      currency: string;
      balance: {
        amount: number;
        currency: string
      };
      created_at: Date;
      updated_at: Date;
      resource: string;
      resource_path: string;
      ready: boolean;
    }
  ]
}

export interface CreateAddressResponse {
  data: {
    id: string;
    address: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    network: string;
    resource: string;
    resource_path: string;
  }
}