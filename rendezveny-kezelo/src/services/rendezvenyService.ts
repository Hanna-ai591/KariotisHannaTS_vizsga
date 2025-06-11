import { Rendezveny } from "../models/rendezveny";
import { Resztvevo } from "../models/resztvevo";
import { LogAddition } from "../decorators/logAddition";

export class RendezvenyService{
    private rendezvenyek: Rendezveny[] = [];

    @LogAddition
    addRendezvenyek(rendezveny:Rendezveny){
        this.rendezvenyek.push(rendezveny);
        console.log(`Rendezvény hozzáadva: ${rendezveny.nev}`);
    }

    removeRendezvenyekByName(name:string){
        this.rendezvenyek = this.rendezvenyek.filter(r => r.nev !== name);
        console.log(`Rendezvény törölve: ${name}`);
    }
    getrendezvenyek():Rendezveny[]{
        return this.rendezvenyek;
    }
    updateTematika(name: string, newTematika: string){
        const r = this.rendezvenyek.find(r => r.nev === name);
        if(r)
            r.tematika = newTematika;
        else
        console.log(`Rendezvény nem található: ${name}`);
    }
    addResztvevoToRendezveny(rendezvenyNev: string, resztvevo: Resztvevo){
        const rendezveny = this.rendezvenyek.find(r => r.nev  === rendezvenyNev);
        if (rendezveny)
            rendezveny.addResztvevo(resztvevo);
        
        else
        console.log(`Rendezmény nem található: ${rendezvenyNev}`);
        
    }
    removeResztvevoFromRendezveny(rendezvenyNev: string, email:string):void{
        const rendezveny = this.rendezvenyek.find(r => r.nev === rendezvenyNev);
        if(rendezveny)
            rendezveny.removeResztvevo(email);
        else
        console.log(`Rendezveny nem található: ${rendezvenyNev}`);

    }
    getRendezvenyByTematika(tematika:string): Rendezveny[]{
        return this.rendezvenyek.filter(r => r.tematika.toLowerCase() ===tematika.toLocaleLowerCase());
    }
    

}
