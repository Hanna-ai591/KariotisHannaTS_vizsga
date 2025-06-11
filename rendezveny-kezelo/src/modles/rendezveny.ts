export interface IRendezvény {
    nev: string;
    helyszin: string;
    ido: Date;
    tematika:string;
    resztvevok:string[];
}
export class Rendezveny implements IRendezvény{
    nev: string;
    helyszin: string;
    ido: Date;
    tematika: string;
    resztvevok: string[];

    constructor(nev: string, helyszin: string, ido: Date, tematika:string){
    this.nev = nev;
    this.helyszin = helyszin;
    this.ido = ido;
    this.tematika = tematika;
    this.resztvevok = [];
    }
    addResztvevo(resztvevoNev: string){
        this.resztvevok.push(resztvevoNev);
    }
}
