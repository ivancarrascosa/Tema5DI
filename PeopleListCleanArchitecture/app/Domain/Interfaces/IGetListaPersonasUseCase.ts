import { Persona } from "../Entities/Persona";

export interface IGetListaPersonasUseCase{
    /**
     * getListaPersonas
     */
    getListaPersonas(): Persona[];
}