export class Persona {
    id: number;
    nombre: string;
    apellidos: string;

    constructor(id: number, nombre: string, apellidos: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
  }
  //#region Getters y setters 
  public get Id(): number {
    return this.id;
  }

  // Getter y Setter para nombre
  public get Nombre(): string {
    return this.nombre;
  }

  public set Nombre(valor: string) {
    if (!valor) {
      throw new Error("El nombre no puede estar vacío");
    }
    this.nombre = valor;
  }

  // Getter y Setter para apellidos
  public get Apellidos(): string {
    return this.apellidos;
  }

  public set Apellidos(valor: string) {
    if (!valor) {
      throw new Error("Los apellidos no pueden estar vacíos");
    }
    this.Apellidos = valor;
  }
  //#endregion
}