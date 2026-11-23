import type { IDocument } from "../interfaces/IDocument.js";
import { DocumentType } from "../enums/DocumentType.js";

export const Document: IDocument[] = [
    {
        id: 1,
        name: "report.pdf",
        type: DocumentType.PDF,
        size: 250
    },
    {
        id: 2,
        name: "image.txt",
        type: DocumentType.IMAGE,
        size: 500
    },
    {
        id: 3,
        name: "students.xlsx",
        type: DocumentType.EXCEL,
        size: 750
    },
    {
        id: 4,
        name: "essay.docx",
        type: DocumentType.WORD,
        size: 500
    }
]