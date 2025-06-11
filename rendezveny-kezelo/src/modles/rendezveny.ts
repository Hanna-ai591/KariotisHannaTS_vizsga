import { Resztvevo } from "./resztvevo";

export interface IRendezvény {
    nev: string;
    helyszin: string;
    ido: Date;
    tematika:string;
    resztvevok:Resztvevo[];
}
export class Rendezveny implements IRendezvény{
    nev: string;
    helyszin: string;
    ido: Date;
    tematika: string;
    resztvevok: Resztvevo[];

    constructor(nev: string, helyszin: string, ido: Date, tematika:string){
    this.nev = nev;
    this.helyszin = helyszin;
    this.ido = ido;
    this.tematika = tematika;
    this.resztvevok = [];
    }
    addResztvevo(resztvevo: Resztvevo):void{
        this.resztvevok.push(resztvevo);
    }
}
