import { IGetListaPersonasUseCase } from "@/app/Domain/Interfaces/IGetListaPersonasUseCase";
import { inject } from "inversify";
import { TYPES } from "@/app/Core/Types";
import { Persona } from "@/app/Domain/Entities/Persona";

export class PeopleListViewModel {
    private repository: IGetListaPersonasUseCase
    
    private _personaSeleccionada: Persona

    private _personasList: Persona[] = []

    constructor(
        @inject(TYPES.IGetListaPersonasUseCase) repository: IGetListaPersonasUseCase
    ) {
        this.repository = repository;

        this._personaSeleccionada = new Persona(0, '', '');

        this._personasList = this.repository.getListaPersonas();
    }
    
    public get personasList(): Persona[] {
        return this._personasList;
    }


    public get personaSeleccionada(): Persona {
        return this._personaSeleccionada;
    }


    public set personaSeleccionada(value: Persona) {
        this._personaSeleccionada = value;
       
    }
}