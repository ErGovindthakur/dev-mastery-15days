import SearchBox from "@/app/components/uploads/SearchBox";

import UploadTable from "@/app/components/uploads/UploadTable";

import Pagination from "@/app/components/uploads/Pagination";

import {
  getUploadHistory,
} from "@/modules/upload/upload.service";

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
  const params =
    await searchParams;

  const page = Number(
    params.page ?? "1"
  );

  const limit = Number(
    params.limit ?? "5"
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
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold">
        Upload History
      </h1>

      <div className="mt-4">
        <SearchBox />
      </div>

      <UploadTable
        uploads={result.data}
      />

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