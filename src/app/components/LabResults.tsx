import Image from "next/image";

export default function LabResults({ labResults }: { labResults: string[] }) {
    return (
        <div className="bg-white p-6 max-h-[400px] rounded-lg shadow-md mt-4 overflow-y-auto">
            <h3 className="mb-4 text-lg font-semibold text-heading">Lab Results</h3>
            <ul>
                {labResults.map((result) => (
                    <li key={result} className="py-2 border-b flex justify-between items-center">
                        {/* Text on the left */}
                        <a href={result} download className="text-blue-600 text-heading hover:underline">
                            {result}
                        </a>
                        {/* Icon on the right */}
                        <Image
                            src="/images/download_FILL0_wght300_GRAD0_opsz24/download_FILL0_wght300_GRAD0_opsz24.png"
                            alt="Download Icon"
                            width={20}
                            height={20}
                            className="ml-auto" // Ensures the icon is aligned to the right
                        />
                    </li>
                ))}

            </ul>
        </div>
    );
}
