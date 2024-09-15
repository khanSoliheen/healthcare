'use client';

import { useState, useEffect } from 'react';
import PatientsList from './components/PatientsList';
import PatientDetails from './components/PatientDetails';
import DiagnosisHistory from './components/DiagnosisHistory';
import Header from './components/Header';
import { Patient } from './interfaces/Interface';

export default function Home() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch patients with authorization token
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic Y29hbGl0aW9uOnNraWxscy10ZXN0`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch patients data');
        }

        const data: Patient[] = await response.json();
        setPatients(data);
        setSelectedPatient(data[0])
        setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  // Loading and error states handling
  if (loading) return (
    <div className="flex items-center justify-center h-screen">
      Loading...
    </div>
  );
  if (error) return (
    <div className="flex items-center justify-center h-screen">
      Error: {error}
    </div>
  );
  

  return (
    <div className='bg-gray-100'>
      <Header />
      <div className="mainContent">
        <PatientsList
          patients={patients}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        {selectedPatient && (
          <>
            <DiagnosisHistory
              history={selectedPatient.diagnosis_history} diagnostic_list={selectedPatient.diagnostic_list}
            />
            <PatientDetails patient={selectedPatient} labResults={selectedPatient.lab_results}/>
          </>
        )}
      </div>
    </div>
  );
}
