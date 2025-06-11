import { Rendezveny } from "../modles/rendezveny";

export class RendezvenyService{
    private rendezvenyek: Rendezveny[] = [];

    addRendezvenyek(rendezveny:Rendezveny){
        this.rendezvenyek.push(rendezveny);
    }

    removeRendezvenyekByName(name:string){
        this.rendezvenyek = this.rendezvenyek.filter(r => r.nev !== name);

    }

}