import { NextRequest, NextResponse }
from "next/server";
import { processUpload } from "@/modules/upload/upload.service";

import {
  getUploadHistory,
} from "@/modules/upload/upload.service";

export async function GET(
  request: NextRequest
) {
  const searchParams =
    request.nextUrl.searchParams;

  const page = Number(
    searchParams.get("page") ?? 1
  );

  const limit = Number(
    searchParams.get("limit") ?? 10
  );

  const uploads =
    await getUploadHistory(
      page,
      limit
    );

  return NextResponse.json(
    uploads
  );
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        {
          success: false,
          message: "CSV file is required",
        },
        {
          status: 400,
        },
      );
    }

    const text = await file.text();

    const result = await processUpload(file.name, text);

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
