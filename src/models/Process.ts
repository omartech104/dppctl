import type { IProcess } from "../interfaces/IProcess.js";
import { ProcessType } from "../enums/ProcessType.js";

export const Process: IProcess[] = [
    {
        id: 1,
        documentID: 1,
        status: ProcessType.PROCESSING
    },
    {
        id: 2,
        documentID: 2,
        status: ProcessType.FAILED
    },
    {
        id: 3,
        documentID: 3,
        status: ProcessType.PENDING
    },
    {
        id: 4,
        documentID: 4,
        status: ProcessType.COMPLETED
    }
]