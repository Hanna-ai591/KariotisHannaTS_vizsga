import { Rendezveny } from "./models/rendezveny"
import { RendezvenyService } from "./services/rendezvenyService"
import { Resztvevo } from "./models/resztvevo";

const service = new RendezvenyService();

const fesztival = new Rendezveny("Nyári fesztivál", "Budapest", new Date("2025-07-16"), "Zene");

service.addRendezvenyek(fesztival);

const resztvevo1 = new Resztvevo("John Doe", "john.doe@gmail.com");
const resztvevo2 = new Resztvevo("Jane Doe", "jane.doe@gmail.com");

service.addResztvevoToRendezveny("Nyári fesztivál", resztvevo1);
service.addResztvevoToRendezveny("Nyári fesztivál", resztvevo2);


console.log("Rendezvények:");;
service.getrendezvenyek().forEach(r => {
    console.log(` -${r.nev}, ${r.tematika}, helyszín: ${r.helyszin}, résztvevők száma: ${r.resztvevok.length}`);
});

console.log("Résztvevők a Nyári fesztiválon:");
service.getrendezvenyek().forEach(r =>{
    if(r.nev ==="NYári fesztivál"){
        r.resztvevok.forEach(Resztvevo =>{
            console.log(` - ${Resztvevo.nev} ${Resztvevo.email}`);
        });
    }
});
service.removeResztvevoFromRendezveny("Nári fesztivál", "john.doe@gmail.com");
service.removeRendezvenyekByName("Nyári fesztivál");

console.log("Rendezvények törlése utás:");
service.getrendezvenyek().forEach(r =>{
    console.log(` -${r.nev}`);
    
});


