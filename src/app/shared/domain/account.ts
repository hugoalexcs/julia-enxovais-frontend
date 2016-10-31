
import 'lodash';
declare var _;
/*
/// <reference path='../../../../node_modules/lodash/lodash.js'/>
///<reference path="../../../../../typings/lodash/lodash.d.ts" />
///<reference path="../../../../node_modules/lodash/lodash.d.ts" />
//"../node_modules/lodash/lodash.js",
*/

export class Account {
    id:number;
    login:string;
    profile:string;
    authorities:Array<string>;
    authenticated = true;
    constructor(account?:{id:number,login:string,profile:string,authorities:Array<string>}) {
        if(account) {
            _.assignIn(this, account);
            this.authenticated = false;
        }
    }
}