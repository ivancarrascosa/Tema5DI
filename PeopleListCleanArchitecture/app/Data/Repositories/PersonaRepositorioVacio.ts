import { Persona } from "@/app/Domain/Entities/Persona";
import { IGetListaPersonas } from "@/app/Domain/Repositories/IGetListaPersonas";

export class RepositoryPersonasVacio implements IGetListaPersonas{
    getListaPersonas(): Persona[] {
        return[]
    }
    
}