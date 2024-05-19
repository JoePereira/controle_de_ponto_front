import { IEntry } from "./IEntry";

export interface IGetEntries {
  data: IEntry[];
  total: number;
  page: number;
  pageSize: number;
}
