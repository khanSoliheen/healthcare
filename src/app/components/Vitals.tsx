import Image from "next/image";

interface VitalsProps {
  vitals: {
    respiratoryRate: number;
    temperature: number;
    heartRate: number;
  };
}

export default function Vitals({ vitals }: VitalsProps) {
  return (
    <div className="flex gap-6 mt-4">
      {/* Respiratory Rate */}
      <div className="bg-respiratory p-6 rounded-lg shadow-md text-center">
        <Image
          src="/images/respiratory-rate/respiratory-rate.png"
          alt="Respiratory Rate Icon"
          width={48}
          height={48}
          className="mx-auto mb-4 ml-0"
        />
        <h4 className="text-lg text-left font-semibold text-heading">Respiratory Rate</h4>
        <p className="text-2xl text-left text-heading" >{vitals.respiratoryRate} bpm</p>
        <p className="text-sm text-gray-600 text-left text-heading">Normal</p>
      </div>

      {/* Temperature */}
      <div className="bg-temperature p-6 rounded-lg shadow-md text-center">
        <Image
          src="/images/temperature/temperature.png"
          alt="Respiratory Rate Icon"
          width={48}
          height={48}
          className="mx-auto mb-4 ml-0"
        />
        <h4 className="text-lg text-left font-semibold text-heading">Temperature</h4>
        <p className="text-2xl text-left text-heading">{vitals.temperature}°F</p>
        <p className="text-sm text-gray-600 text-left text-heading">Normal</p>
      </div>

      {/* Heart Rate */}
      <div className="bg-heartRate p-6 rounded-lg shadow-md text-center">
        <Image
          src="/images/HeartBPM/HeartBPM.png"
          alt="Respiratory Rate Icon"
          width={48}
          height={48}
          className="mx-auto mb-4 ml-0"
        />
        <h4 className="text-lg text-left font-semibold text-heading">Heart Rate</h4>
        <p className="text-2xl text-left text-heading">{vitals.heartRate} bpm</p>
        <p className={`text-sm text-heading text-left  ${vitals.heartRate > 75 ? 'text-red-600' : 'text-gray-600'}`}>
          {vitals.heartRate > 75 ? 'Lower than Average' : 'Normal'}
        </p>
      </div>
    </div>
  );
}
