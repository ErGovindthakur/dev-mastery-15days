import { CsvDealerRow } from "../dealer/dealer.types";

export interface DealerInput {
  name: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  creditLimit: number;
  uploadId: number;
}

export interface UploadErrorInput {
  rowNumber: number;
  columnName: string;
  message: string;
  value: string;
  uploadId: number;
}

export interface ValidationError {
  rowNumber: number;
  columnName: string;
  message: string;
  value: string;
}

export interface ParseCsvResult {
  validRows: CsvDealerRow[];
  errors: ValidationError[];
}