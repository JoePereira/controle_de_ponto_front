export interface IEntry {
  id: string;
  usuarioId: string;
  horarioEntrada: string;
}

export interface IGetEntries {
  id: string;
  usuarioId: string;
  horarioEntrada: string;
  arrayEntry: IEntry[];
}

export interface IPagination {
  skip: number;
  take: number;
}
