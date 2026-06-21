import { NextResponse } from "next/server";

import {
  getUploadDetails,
} from "@/modules/upload/upload.service";

export async function GET(
  request: Request,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  const { id } =
    await context.params;

  const upload =
    await getUploadDetails(
      Number(id)
    );

  if (!upload) {
    return NextResponse.json(
      {
        message:
          "Upload not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(
    upload
  );
}