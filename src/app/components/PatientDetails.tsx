import Image from "next/image";
import LabResults from "./LabResults";

interface PatientDetailsProps {
  id: string;
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  lab_results: string[];
}

export default function PatientDetails({ patient, labResults }: { patient: PatientDetailsProps, labResults: string[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Image src={patient.profile_picture} alt={patient.name} width={150} height={150} className="rounded-full mx-auto mb-4" />
      <h2 className="text-xl font-semibold text-heading text-center">{patient.name}</h2>

      {/* Date of Birth */}
      <div className="flex justify-start items-center space-x-4 mb-6 mt-8">
        <Image src="/images/BirthIcon.svg" alt="birth" width={42} height={42} className="rounded-full" />
        <p className="mt-2 text-heading"><strong>Date of Birth:</strong> {patient.date_of_birth}</p>
      </div>

      {/* Gender */}
      <div className="flex justify-start items-center space-x-4 mb-6">
        <Image src="/images/FemaleIcon.svg" alt="gender" width={42} height={42} className="rounded-full" />
        <p className="text-heading"><strong>Gender:</strong> {patient.gender}</p>
      </div>

      {/* Contact Info */}
      <div className="flex justify-start items-center space-x-4 mb-6">
        <Image src="/images/PhoneIcon.svg" alt="phone" width={42} height={42} className="rounded-full" />
        <p className="text-heading"><strong>Contact Info:</strong> {patient.phone_number}</p>
      </div>

      {/* Emergency Contact */}
      <div className="flex justify-start items-center space-x-4 mb-6">
        <Image src="/images/PhoneIcon.svg" alt="phone" width={42} height={42} className="rounded-full" />
        <p className="text-heading"><strong>Emergency Contact:</strong> {patient.emergency_contact}</p>
      </div>

      {/* Insurance Provider */}
      <div className="flex justify-start items-center space-x-4 mb-6">
        <Image src="/images/InsuranceIcon.svg" alt="insurance" width={42} height={42} className="rounded-full" />
        <p className="text-heading"><strong>Insurance Provider:</strong> {patient.insurance_type}</p>
      </div>
      <div className="flex justify-center my-4">
        <button className="bg-[#01F0D0] text-heading mx-auto rounded-full font-bold h-[41px] w-[220px]">
          Show All Information
        </button>
      </div>
      <LabResults labResults={labResults} />
    </div>
  );
}
