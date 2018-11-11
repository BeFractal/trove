import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'eosjs'; // https://github.com/EOSIO/eosjs

@Injectable()
export class EOSJSService {
  endpoint: string = 'http://localhost:8888';
  constructor(private httpClient: HttpClient) {}

async createProject() {
  var account = "borrower";
  var privateKey = "5K7mtrinTFrVTduSxizUc5hjXJEtTjVTsqSHeBHes1Viep86FP5";
  var title = "Tesla Model S";
  var description = "I really want this car";
  var amount = 100000;

  let actionName = "insert";
  let actionData = {
    _user: account,
    _title: title,
    _description: description,
    _amount: amount
  };

  // angular 5 needed. this is a breaking issue in angular-cli that throws cipher error.
  // https://github.com/angular/angular-cli/issues/1548

  // const rpc = new JsonRpc(this.endpoint);
  // const signatureProvider = new JsSignatureProvider([privateKey]);
  // const api = new Api({
  //   rpc,
  //   signatureProvider,
  //   textDecoder: new TextDecoder(),
  //   textEncoder: new TextEncoder()
  // });
  // try {
  //   const result = await api.transact(
  //     {
  //       actions: [
  //         {
  //           account: 'troveacc',
  //           name: actionName,
  //           authorization: [
  //             {
  //               actor: account,
  //               permission: 'active'
  //             }
  //           ],
  //           data: actionData
  //         }
  //       ]
  //     },
  //     {
  //       blocksBehind: 3,
  //       expireSeconds: 30
  //     }
  //   );

  //   console.log(result);
  //   // this.getTable();
  // } catch (e) {
  //   console.log('Caught exception: ' + e);
  //   if (e instanceof RpcError) {
  //     console.log(JSON.stringify(e.json, null, 2));
  //   }
  // }
}

  // gets table data from the blockchain
  // and saves it into the component state: "noteTable"
  getTable() {
    // const rpc = new JsonRpc(this.endpoint);
    // rpc.get_table_rows({
    //   "json": true,
    //   "code": "troveacc",   // contract who owns the table
    //   "scope": "troveacc",  // scope of the table
    //   "table": "notestruct",    // name of the table as specified by the contract abi
    //   "limit": 100,
    // }).then(result => {
    //   console.log(result);
    // });
  }
}
