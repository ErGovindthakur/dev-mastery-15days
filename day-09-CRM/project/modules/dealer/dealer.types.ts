export interface CsvDealerRow {
  name: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  credit_limit?: string;
}

export interface DealerInput {
  rowNumber: number;

  name: string;
  phone: string;
  email: string;

  city: string;
  state: string;

  creditLimit: number;
}

export interface DealerInsertInput {
  name: string;
  phone: string;
  email: string;

  city: string;
  state: string;

  creditLimit: number;

  uploadId: number;
}