import { Diagnostic } from "../interfaces/Interface";

export default function DiagnosticList({ diagnostics }: { diagnostics: Diagnostic[] }) {
  return (
    <div className="bg-white p-6 max-h-[400px] rounded-lg shadow-md mt-12 overflow-y-auto">
      <h3 className="mb-4 text-lg font-semibold text-heading">Diagnostic List</h3>
      <table className="border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left bg-gray-100 text-heading">Problem/Diagnosis</th>
            <th className="py-2 px-4 text-left bg-gray-100 text-heading">Description</th>
            <th className="py-2 px-4 text-left bg-gray-100 text-heading">Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnostics.map((diagnosis) => (
            <tr key={diagnosis.description}>
              <td className="py-2 px-4 border-b text-heading">{diagnosis.name}</td>
              <td className="py-2 px-4 border-b text-heading">{diagnosis.description}</td>
              <td className="py-2 px-4 border-b text-heading">{diagnosis.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
