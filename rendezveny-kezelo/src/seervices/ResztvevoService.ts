import { Resztvevo } from "../modles/resztvevo";
export class ResztvevoService {
    private resztvevok: Resztvevo[] = [];

    hozzaad(nev:string, email:string):void{
        const ujResztvevo = new Resztvevo(nev, email);
        this.resztvevok.push(ujResztvevo);
        console.log(`Új résztvevő hozzáadva: ${nev} (${email})`);
        
    }
    listaz():Resztvevo[]{
        return this.resztvevok;
    }
    torol(email:string):void{
        this.resztvevok = this.resztvevok.filter(r => r.email !== email);
        console.log(`Résztvevő törölve${email}`);
        
    }
}