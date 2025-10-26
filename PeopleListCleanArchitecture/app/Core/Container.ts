import { Container } from "inversify";
import { TYPES } from "./Types";
import { IGetListaPersonas } from "../Domain/Repositories/IGetListaPersonas";
import { IGetListaPersonasUseCase } from "../Domain/Interfaces/IGetListaPersonasUseCase";
import { RepositoryPersona } from "../Data/Repositories/personaRepository";
import { DefaultGetListaPersonasUseCase } from "../Domain/useCases/DefaultGetListaPersonasUseCase";
import { PeopleListViewModel } from "../Presentation/ViewModels/PeopleListViewModel";

const container = new Container();

// Binding del repositorio
container.bind<IGetListaPersonas>(TYPES.IGetListaPersonas).to(RepositoryPersona);

// Binding del use case
container.bind<IGetListaPersonasUseCase>(TYPES.IGetListaPersonasUseCase).to(DefaultGetListaPersonasUseCase);

// Binding del ViewModel
container.bind<PeopleListViewModel>(TYPES.PeopleListViewModel).to(PeopleListViewModel);

export { container };