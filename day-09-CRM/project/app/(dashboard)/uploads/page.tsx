import SearchBox from "@/app/components/uploads/SearchBox";
import UploadTable from "@/app/components/uploads/UploadTable";
import Pagination from "@/app/components/uploads/Pagination";

import {
  getUploadHistory,
} from "@/modules/upload/upload.service";
import UploadButton from "../../components/uploads/UploadButton";

interface Props {
  searchParams: Promise<{
    page?: string;
    limit?: string;
    search?: string;
  }>;
}

export default async function UploadsPage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const page = Number(
    params.page ?? "1"
  );

  const limit = Number(
    params.limit ?? "10"
  );

  const search =
    params.search ?? "";

  const result =
    await getUploadHistory(
      page,
      limit,
      search
    );

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-100">
            Upload History
          </h1>

          <p className="mt-1 text-slate-400">
            Monitor CSV uploads and validation results.
          </p>
        </div>

       <UploadButton />
      </div>

      {/* Search */}

      <SearchBox />

      {/* Table */}

      <UploadTable
        uploads={result.data}
      />

      {/* Pagination */}

      <Pagination
        currentPage={
          result.pagination.page
        }
        totalPages={
          result.pagination.totalPages
        }
      />
    </div>
  );
}