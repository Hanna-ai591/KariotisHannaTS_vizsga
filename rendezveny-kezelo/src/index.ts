import { Rendezveny } from "./modles/rendezveny"
import { RendezvenyService } from "./seervices/rendezvenyService"

const service = new RendezvenyService();
const fesztival = new Rendezveny("Nyári fesztivál", "Budapest", new Date("2025-07-16"), "Zene");
service.addRendezvenyek(fesztival);
console.log(service.getrendezvenyek());
