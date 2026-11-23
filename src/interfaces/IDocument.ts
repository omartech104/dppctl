import { DocumentType } from "../enums/DocumentType.js";

export interface IDocument {
    id: number,
    name: string,
    type: DocumentType,
    size: number
}