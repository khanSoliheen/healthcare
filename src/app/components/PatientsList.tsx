import { Dispatch, SetStateAction } from "react";
import { Patient } from "../interfaces/Interface";
import Image from "next/image";

export default function PatientsList({ patients, selectedPatient, setSelectedPatient }: { patients: Patient[], selectedPatient: Patient | null, setSelectedPatient: Dispatch<SetStateAction<Patient | null>> }) {
    return (
        <div className="bg-white p-4 rounded-lg max-h-[1200px] flex flex-col"> {/* Limit the height of the container */}
            <h2 className="mb-4 text-lg font-semibold text-heading">Patients</h2>
            {/* Scrollable Container */}
            <div className="flex-1 overflow-y-auto"> {/* Set overflow and allow it to take available space */}
                <ul>
                    {patients.map((patient) => (
                        <li
                            key={patient.phone_number}
                            onClick={() => setSelectedPatient(patient)}
                            className={`flex items-center mb-4 p-4 rounded-lg cursor-pointer transition-colors ${selectedPatient?.name === patient.name ? 'bg-activeUser' : ''
                                }`}
                        >
                            <Image src={patient.profile_picture} alt={patient.name} width={48}
                                height={48} className="rounded-full w-10 h-10 mr-4" />
                            <div>
                                <h4 className="font-bold text-heading">{patient.name}</h4>
                                <p className="text-sm text-gray-600">{patient.gender}, {patient.age}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
