import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./Types";
import { RepositoryPersona } from "../Data/Repositories/personaRepository";
import { IGetListaPersonas } from "../Domain/Repositories/IGetListaPersonas";
import { IGetListaPersonasUseCase } from "../Domain/Interfaces/IGetListaPersonasUseCase";
import { DefaultGetListaPersonasUseCase } from "../Domain/useCases/DefaultGetListaPersonasUseCase";

const container = new Container()
container.bind<IGetListaPersonas>(TYPES.IGetListaPersonas).to(RepositoryPersona);
container.bind<IGetListaPersonasUseCase>(TYPES.IGetListaPersonasUseCase).to(DefaultGetListaPersonasUseCase);

export { container };