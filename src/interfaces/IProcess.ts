import { ProcessType } from "../enums/ProcessType.js";

export interface IProcess {
    id: number,
    documentID: number,
    status: ProcessType
}