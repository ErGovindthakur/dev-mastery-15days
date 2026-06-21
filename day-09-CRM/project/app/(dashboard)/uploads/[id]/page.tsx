import UploadSummary from "@/app/components/uploads/UploadSummary";
import UploadMetrics from "@/app/components/uploads/UploadMetrics";
import DealerList from "@/app/components/uploads/DealerList";
import ErrorList from "@/app/components/uploads/ErrorList";
import UploadTimeline from "@/app/components/uploads/UploadTimeline";

import {
  getUploadDetails,
} from "@/modules/upload/upload.service";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function UploadPage({
  params,
}: Props) {
  const { id } =
    await params;

  const upload =
    await getUploadDetails(
      Number(id)
    );

  if (!upload) {
    return (
      <div>
        Upload not found
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <UploadSummary
        filename={upload.filename}
        status={upload.status}
      />

      <UploadMetrics
        totalRows={upload.totalRows}
        insertedRows={upload.insertedRows}
        failedRows={upload.failedRows}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DealerList
            dealers={upload.dealers}
          />
        </div>

        <UploadTimeline
          createdAt={
            upload.createdAt
          }
          updatedAt={
            upload.updatedAt
          }
        />
      </div>

      <ErrorList
        errors={upload.errors}
      />
    </div>
  );
}