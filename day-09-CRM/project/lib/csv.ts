import Papa from "papaparse";

import { CsvDealerRow } from "@/modules/dealer/dealer.types";

export function parseCsv(
  text: string
): CsvDealerRow[] {
  const result = Papa.parse<CsvDealerRow>(
    text,
    {
      header: true,
      skipEmptyLines: true,
    }
  );

  if (result.errors.length > 0) {
    throw new Error("Invalid CSV format");
  }

  return result.data;
}