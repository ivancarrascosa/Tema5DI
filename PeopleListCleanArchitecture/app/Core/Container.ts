import { Container } from "inversify";
import { TYPES } from "./Types";
import { RepositoryPersona } from "../Data/Repositories/personaRepository";

const container = new Container
container.bind<IGetListaPersonas>(TYPES.IGetListaPersonas).to(RepositoryPersona);