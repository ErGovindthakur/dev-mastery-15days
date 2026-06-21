type Upload = {
  id: number;
  filename: string;
  totalRows: number;
  insertedRows: number;
  failedRows: number;
  status: string;
};

interface Props {
  uploads: Upload[];
}

export default function UploadTable({
  uploads,
}: Props) {
  return (
    <table className="w-full border mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Filename</th>
          <th>Total</th>
          <th>Inserted</th>
          <th>Failed</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {uploads.map((upload) => (
          <tr key={upload.id}>
            <td>{upload.id}</td>
            <td>{upload.filename}</td>
            <td>{upload.totalRows}</td>
            <td>{upload.insertedRows}</td>
            <td>{upload.failedRows}</td>
            <td>{upload.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}