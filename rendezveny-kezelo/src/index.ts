import { Rendezveny } from "./models/rendezveny"
import { RendezvenyService } from "./services/rendezvenyService"

const service = new RendezvenyService();
const fesztival = new Rendezveny("Nyári fesztivál", "Budapest", new Date("2025-07-16"), "Zene");
service.addRendezvenyek(fesztival);
console.log(service.getrendezvenyek());
