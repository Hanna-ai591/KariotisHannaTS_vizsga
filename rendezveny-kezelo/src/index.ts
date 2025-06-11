import { Rendezveny } from "./models/rendezveny"
import { RendezvenyService } from "./services/rendezvenyService"
import { Resztvevo } from "./models/resztvevo";

const service = new RendezvenyService();
const fesztival = new Rendezveny("Nyári fesztivál", "Budapest", new Date("2025-07-16"), "Zene");
service.addRendezvenyek(fesztival);
const resztvevo1 = new Resztvevo("John Doe", "john.doe@gmail.com");
service.addResztvevoToRendezveny("NYári fesztivál", resztvevo1);

console.log("Rendezvények:");;
service.getrendezvenyek().forEach(r => {
    console.log(` -${r.nev}, ${r.tematika}, helyszín: ${r.helyszin}, résztvevők száma: ${r.resztvevok.length}`);
});

service.removeRezstvevoFromRendezveny("Nyári fesztivál","john.doe@gmail.com");
 
