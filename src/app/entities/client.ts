import { Address } from "./address";


export interface Client {
    id:number;
    name:string;
    surname:string; 
    birthdate:Date;
    address:Address;
    email:string;
}
