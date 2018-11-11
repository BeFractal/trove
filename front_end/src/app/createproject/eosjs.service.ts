import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'eosjs'; // https://github.com/EOSIO/eosjs

@Injectable()
export class EOSJSService {
  endpoint: string = "http://localhost:8888";
  constructor(private httpClient: HttpClient) {}
/*
account_name  user;           // account name for the user
      std::string   title;          // title
      std::string   description;    // the description
      uint64_t      amount; 
*/
  async handleFormEvent(account: string, privateKey: string, title: string, description: string, amount: number) {
    
    // prepare variables for the switch below to send transactions
    let actionName = "insert";
    let actionData = {
      _user: account,
      _title: title,
      _description: description
    };

    // define actionName and action according to event type
    // switch (event.type) {
    //   case "submit":
    //     actionName = "update";
    //     actionData = {
    //       _user: account,
    //       _note: note,
    //     };
    //     break;
    //   default:
    //     return;
    // }
    

    // eosjs function call: connect to the blockchain
    const rpc = new JsonRpc(this.endpoint);
    const signatureProvider = new JsSignatureProvider([privateKey]);
    const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
    try {
      const result = await api.transact({
        actions: [{
          account: "notechainacc",
          name: actionName,
          authorization: [{
            actor: account,
            permission: 'active',
          }],
          data: actionData,
        }]
      }, {
        blocksBehind: 3,
        expireSeconds: 30,
      });

      console.log(result);
      this.getTable();
    } catch (e) {
      console.log('Caught exception: ' + e);
      if (e instanceof RpcError) {
        console.log(JSON.stringify(e.json, null, 2));
      }
    }
  }

  // gets table data from the blockchain
  // and saves it into the component state: "noteTable"
  getTable() {
    // const rpc = new JsonRpc(this.endpoint);
    // rpc.get_table_rows({
    //   "json": true,
    //   "code": "notechainacc",   // contract who owns the table
    //   "scope": "notechainacc",  // scope of the table
    //   "table": "notestruct",    // name of the table as specified by the contract abi
    //   "limit": 100,
    // }).then(result => this.setState({ noteTable: result.rows }));
  }
}
