import { IExit } from "./IExit";

export interface IGetExits {
  data: IExit[];
  total: number;
  page: number;
  pageSize: number;
}
