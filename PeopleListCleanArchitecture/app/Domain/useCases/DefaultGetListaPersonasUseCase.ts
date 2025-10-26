import { inject } from "inversify";
import { Persona } from "../Entities/Persona";
import { IGetListaPersonasUseCase } from "../Interfaces/IGetListaPersonasUseCase";
import { TYPES } from "@/app/Core/Types";
import { IGetListaPersonas } from "../Repositories/IGetListaPersonas";

export class DefaultGetListaPersonasUseCase implements IGetListaPersonasUseCase {
    private repository: IGetListaPersonas;

    constructor(
        @inject(TYPES.IGetListaPersonas) repository: IGetListaPersonas
    ) {
        this.repository = repository;
    }

    getListaPersonas(): Persona[] {
        return this.repository.getListaPersonas();
    }
}