export interface IResztvevo{
    nev: string;
    email:string;
}
export class Resztvevo implements IResztvevo{
    nev:string;
    email: string;

    constructor (nev:string, email:string){
        this.nev = nev;
        this.email = email;

    }
}