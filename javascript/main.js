import { userList } from './db.js';

console.log("Hello JS");

console.log(userList[0].name);

//Primitiv Types
const active = true; //boolean
const age = 22; //number
const userName = 'Mz/x'; //string
const nothing = null; //null
let price; //undefined

//Creating Variables
//
// Var (outdated)
// let (new , modifiable)
// const (new , not modifiable)
// a const container can not be changed, but the content can be changed

//Collections
const items = [1, 5, ['Hello', true], 'message'];
console.log(items[2][1]);
console.log(items.length);

//Objects
//Objects are key-value pairs
//Objects are created with {}
//Objects are accessed with . or []


const settings = {
    url: 'http://localhost:3000',
    devMode: true,

}

console.log(settings.url);
const key = 'devMode';
console.log(settings[key]);

